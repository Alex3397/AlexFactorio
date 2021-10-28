package com.alex.login.images;

import lombok.Getter;
import lombok.Setter;
import org.apache.commons.io.FileUtils;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.io.File;
import java.io.IOException;

@RestController
@RequestMapping(value = "/images")
@Setter
@Getter
public class FileController {
    private String relativePath;
    private String FILE_PATH_ROOT;

    @GetMapping("/{path}/{filename}")
    public ResponseEntity<byte[]> getImage(@PathVariable("path") String path,@PathVariable("filename") String filename) {
        switch (path) {
            case "confirm":
                setRelativePath("/src/main/resources/templates/emails/Confirm Email/images/");
                setFILE_PATH_ROOT(System.getProperty("user.dir") + relativePath);
                break;
            case "revalidate":
                setRelativePath("/src/main/resources/templates/emails/Revalidate Token/images/");
                setFILE_PATH_ROOT(System.getProperty("user.dir") + relativePath);
                break;
            case "reset":
                setRelativePath("/src/main/resources/templates/emails/Reset Password/images/");
                setFILE_PATH_ROOT(System.getProperty("user.dir") + relativePath);
                break;
            case "hosting":
                setRelativePath("/src/main/resources/hosting/");
                setFILE_PATH_ROOT(System.getProperty("user.dir") + relativePath);
                break;
        }
        byte[] image = new byte[0];
        try {
            image = FileUtils.readFileToByteArray(new File(FILE_PATH_ROOT+filename));
        } catch (IOException e) {
            throw new ImageNotFoundException();
        }
        return ResponseEntity.ok().contentType(MediaType.IMAGE_PNG).body(image);
    }
}
