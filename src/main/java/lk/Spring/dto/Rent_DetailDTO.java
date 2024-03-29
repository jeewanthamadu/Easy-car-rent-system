package lk.Spring.dto;

import com.fasterxml.jackson.annotation.JsonFormat;
import lk.Spring.entity.Rent;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

import java.time.LocalDate;

@NoArgsConstructor
@AllArgsConstructor
@Data
@ToString
public class Rent_DetailDTO {

    private String rent_Id;
    private String registration_Number;
    @JsonFormat(pattern = "yyyy-MM-dd")
    private LocalDate checking;
    @JsonFormat(pattern = "yyyy-MM-dd")
    private LocalDate return_Date;
    private int kilometers;
    private double rental_Cost;
    private double damage_Cost;
    private String status;



}
