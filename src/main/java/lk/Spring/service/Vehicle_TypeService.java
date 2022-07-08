package lk.Spring.service;

import lk.Spring.dto.CustomerDTO;
import lk.Spring.dto.Vehicle_TypeDTO;

import java.util.List;

public interface Vehicle_TypeService {

    void saveVehicleType (Vehicle_TypeDTO Vehicle_typeDTO);
    void deleteVehicleType (String id);
    void updateVehicleType (Vehicle_TypeDTO Vehicle_typeDTO);
    CustomerDTO searchVehicleType(String id);
    List<Vehicle_TypeDTO> getAllVehicleTypes();

}