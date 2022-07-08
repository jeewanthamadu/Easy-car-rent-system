package lk.Spring.service.impl;

import lk.Spring.dto.RatesDTO;
import lk.Spring.entity.Customer;
import lk.Spring.entity.Rates;
import lk.Spring.repo.RatesRepo;
import lk.Spring.service.RatesService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@Transactional
public class RatesServiceImpl implements RatesService {

    @Autowired
    private RatesRepo repo;
    @Autowired
    private ModelMapper mapper;

    @Override
    public void saveRate(RatesDTO ratesDTO) {
        if (!repo.existsById(ratesDTO.getRate_Id())){
            repo.save(mapper.map(ratesDTO, Rates.class));
        }else {
            throw new RuntimeException("Customer Already Saved..");
        }
    }

    @Override
    public void deleteRate(String id) {

    }

    @Override
    public void updateRate(RatesDTO ratesDTO) {

    }

    @Override
    public RatesDTO searchRate(String id) {
        return null;
    }

    @Override
    public List<RatesDTO> getAllRates() {
        return null;
    }
}