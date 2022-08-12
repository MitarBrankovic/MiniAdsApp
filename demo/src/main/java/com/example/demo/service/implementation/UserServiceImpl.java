package com.example.demo.service.implementation;

import com.example.demo.dto.UserRegistrationDto;
import com.example.demo.dto.security.LoginRequest;
import com.example.demo.dto.security.LoginResponse;
import com.example.demo.model.UserApp;
import com.example.demo.repository.RoleRepository;
import com.example.demo.repository.UserRepository;
import com.example.demo.security.jwt.JwtUtils;
import com.example.demo.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import java.security.SecureRandom;
import java.util.List;

@Service
public class UserServiceImpl implements UserService, UserDetailsService {

    @Autowired
    private UserRepository userRepository;
    @Autowired
    private RoleRepository roleRepository;
    @Autowired
    private AuthenticationManager authenticationManager;
    @Autowired
    private JwtUtils jwtUtils;

    @Override
    public void saveUser(UserRegistrationDto userRegistrationDTO) {
        int strength = 10; // work factor of bcrypt
        BCryptPasswordEncoder bCryptPasswordEncoder =
                new BCryptPasswordEncoder(strength, new SecureRandom());
        String encodedPassword = bCryptPasswordEncoder.encode(userRegistrationDTO.getPassword());

        userRepository.save(new UserApp(userRegistrationDTO.getUsername(),
                encodedPassword,
                userRegistrationDTO.getFirstName(),
                userRegistrationDTO.getLastName(),
                userRegistrationDTO.getPhoneNumber(),
                userRegistrationDTO.getDateOfRegistration(),
                roleRepository.findById(1L).orElseThrow()));
    }

    @Override
    public List<UserApp> findAll() {
        return userRepository.findAll();
    }


    @Override
    public UserApp findByUsername(String username) {
        return userRepository.findByUsername(username);
    }

    public UserApp loadUserByUsername(String username){
        return userRepository.findByUsername(username);
    }

    public LoginResponse login(LoginRequest request) throws AuthenticationException {
        authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(request.getUsername(), request.getPassword()));
        UserApp user = loadUserByUsername(request.getUsername());
        String token = jwtUtils.generateToken(user);

        return new LoginResponse(token, user);
    }
}

