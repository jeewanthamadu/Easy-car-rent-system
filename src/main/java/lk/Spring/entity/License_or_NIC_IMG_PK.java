package lk.Spring.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.io.Serializable;

@NoArgsConstructor
@AllArgsConstructor
@Data
public class License_or_NIC_IMG_PK implements Serializable {
    private String img_Id;
    private String customerID;

}
