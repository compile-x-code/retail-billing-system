
package com.example.retail.controller;

import org.springframework.web.bind.annotation.*;
import java.util.List;
import com.example.retail.entity.Product;
import com.example.retail.service.ProductService;

@RestController

@RequestMapping("/api/products")

@CrossOrigin // allow frontend calls
public class ProductController {

    private final ProductService service;

    public ProductController(ProductService service) {
        this.service = service;
    }

    @GetMapping
    public List<Product> getAll() {
        return service.getAllProducts();
    }


    @PostMapping
    public Product addProduct(@RequestBody Product product) {
        return service.saveProduct(product);
    }

    @DeleteMapping("/{id}")
    public void deleteProduct(@PathVariable Long id) {
        service.deleteProduct(id);
    }
}