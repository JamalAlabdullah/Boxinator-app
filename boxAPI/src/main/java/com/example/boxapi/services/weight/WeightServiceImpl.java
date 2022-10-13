package com.example.boxapi.services.weight;

import com.example.boxapi.models.Weight;
import com.example.boxapi.repositories.WeightRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.Collection;

@Service
@Transactional
@RequiredArgsConstructor
@Slf4j
public class WeightServiceImpl implements WeightService{

    private final WeightRepository weightRepository;

    @Override
    public Weight findById(Integer integer) {
        return weightRepository.findById(integer).get();
    }

    @Override
    public Collection<Weight> findAll() {
        return null;
    }

    @Override
    public Weight add(Weight entity) {
        return null;
    }

    @Override
    public Weight update(Weight entity) {
        return null;
    }

    @Override
    public void deleteById(Integer integer) {

    }

    @Override
    public void delete(Weight entity) {

    }
}
