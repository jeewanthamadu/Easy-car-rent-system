package lk.Spring.service.impl;

import lk.Spring.dto.CustomerDTO;
import lk.Spring.dto.StaffDTO;
import lk.Spring.entity.Staff;
import lk.Spring.repo.StaffRepo;
import lk.Spring.service.StaffService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@Transactional
public class StaffServiceImpl implements StaffService {

    @Autowired
    private StaffRepo repo;
    @Autowired
    private ModelMapper mapper;


    @Override
    public void saveStaff(StaffDTO staffDTO) {
        if (!repo.existsById(staffDTO.getStaff_Id())){
            repo.save(mapper.map(staffDTO, Staff.class));
        }else {
            throw new RuntimeException("Staff Already Saved..");
        }
    }

    @Override
    public void deleteStaff(String id) {

    }

    @Override
    public void updateStaff(StaffDTO staffDTO) {

    }

    @Override
    public CustomerDTO searchStaff(String id) {
        return null;
    }

    @Override
    public List<StaffDTO> getAllStaff() {
        return null;
    }
}
