package com.example.retail.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.example.retail.entity.Product;

// JPA handles CRUD automatically
public interface ProductRepository extends JpaRepository<Product, Long> {
}