package lk.Spring.controller;


import lk.Spring.dto.CustomerDTO;
import lk.Spring.dto.VehicleDTO;
import lk.Spring.service.VehicleService;
import lk.Spring.util.ResponseUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("Vehicle")
@CrossOrigin
public class VehicleController {

    @Autowired
    VehicleService vehicleService;

    @ResponseStatus(HttpStatus.CREATED)
    @PostMapping(produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil saveVehicle(@ModelAttribute VehicleDTO vehicleDTO){
        vehicleService.saveVehicle(vehicleDTO);
        return new ResponseUtil(200,"Saved",null);
    }


    @DeleteMapping(params = {"id"},produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil deleteVehicle(@RequestParam String id){
        vehicleService.deleteVehicle(id);
        return new ResponseUtil(200,"Deleted Success",null);
    }

}
