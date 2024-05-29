<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents**  *generated with [DocToc](https://github.com/thlorenz/doctoc)*

- [System Design Primer -Introduction](#system-design-primer--introduction)
  - [1. Understanding System Design](#1-understanding-system-design)
  - [2. Why need system design?](#2-why-need-system-design)
  - [3. System Design Methods](#3-system-design-methods)
    - [Architectural Design](#architectural-design)
    - [ERD Diagram](#erd-diagram)
    - [UML Diagram](#uml-diagram)
    - [Class Diagrams](#class-diagrams)
    - [Sequence Diagrams](#sequence-diagrams)
  - [4. More Knowledge on System Design](#4-more-knowledge-on-system-design)
    - [1. Performance vs Scalability](#1-performance-vs-scalability)
    - [2. Latency vs Throughput](#2-latency-vs-throughput)
    - [3. Consistency Patterns and Availability Patterns](#3-consistency-patterns-and-availability-patterns)
      - [Consistency Patterns](#consistency-patterns)
      - [Availability Patterns](#availability-patterns)
  - [5. Advanced System Design Concepts](#5-advanced-system-design-concepts)
  - [Components of System Design.](#components-of-system-design)
    - [Database System: RDBMS and NoSQL](#database-system-rdbms-and-nosql)
    - [Communication Protocals](#communication-protocals)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->



# System Design Primer -Introduction
This is a guide into System design both for beginners and professionals.

## 1. Understanding System Design
System design is a step-by-step process of defining a particular software's architecture, modules, components etc.  
It is a base concept in software engineering that is vital in building scalable and reliable software.  


## 2. Why need system design?
1. As a software developer you have to prepare the architecture for the application according to the requirements.
1. To decide how to make the application scalable to deal with customer traffic.

## 3. System Design Methods
There are a wide range of design methods and techniques to design projects. Each method usable through the project's requirements.
They include: 

### Architectural Design
The architectural design is the base of system design. It describes the infrastructure, model, view, components, and interaction.
Examples: Client-server interaction, Microservices.

### ERD Diagram
The Entity Relationship Diagram is mainly used in designing the application's database structure.  
ERD diagrams defie multiple database schemas, add entities in each schema and addd multiple attributes for each entity.

### UML Diagram
The UML (Unified Modelling Language) is used to prepare modelling software systems.
It has diagrams such as activity diagrams, class diagrams, sequence diagrams  etc to represent the different aspects of the system.

### Class Diagrams
The class diagrams are used to represent the classes and can contain the class attributes, methods and relationships between multiple classes.

### Sequence Diagrams 
These display the interaction between various components of the system. It models the behaviour of the system.

## 4. More Knowledge on System Design
### 1. Performance vs Scalability
**Performance** - The longer the time a website takes to load, it decreases in traffic. This makes the users opt for other websites.
***Caching*** can be used to increase the application's performance and serve resources faster.

**Scalability** - this refers to the ability to scale the application. This happens when the user requests are incresing progressively day by day. This requires one to scale an application by distributing the processing loads across multiple servers or increasing the server's capasity.

### 2. Latency vs Throughput
Both latency and throughput affects the efficiency of the system.
**Latency** - Latency is the measurement of the time delay to complete a single request or data operation. It occurs due to geographical distance, transport protocal, or network infrastructure. It s measured in milliseconds. A lower latency is required for the best experience.  
**Throughput** - It is the number of operations the system can handle in a particular time or number of data passed via network request in a given time. It is measured in megabytes (MB) per second.

### 3. Consistency Patterns and Availability Patterns
Consistency and availability are crucial consepts in designing and its important to understand them.  
**Consistency**: Consistency ensures that all nodes in the system read the same data at a particular time.  
***Example***: When using a system simultaneously using different devices it should reflect the end result as consistent having tracked the changes of both occurences and display the results.
**Availability**: The system's availability ensures that each request recieves a response either with fresh or old data. The availability is important when high uptime is needed.  

#### Consistency Patterns
- **Strong Consistency**: This ensures that each request should get the most recent data. Synchronized Communication leads one to achieve strong consistency over availability.
- **Eventual Consistency**: This allows temporary inconsistencies to be resolved soon. It prioritizes availability over consistency.
- **Weak Consistency**: In the weak consistency pattern, the user may get fresh data after writing the data. It focuses on fast access.

#### Availability Patterns
- **Load Balancing**: The upcoming request can be distributed across multiple servers to achieve high availability. 
- **Retry and Timeout strategies**: You can implement the retry mechanism to process the request after every interval if the system fails or is not available. This is when you refresh any website to get a response.

## 5. Advanced System Design Concepts
1. **Content Delivery Network (CDN)**: The CDN is a distributed server network located at different geo-locations. The CDN delivers a resource faster, decreases latency (network delay) and improves an application's performance. 
1. **Domain Name System (DNS)**: Before, users were required to use the IP address. The server returned the resources based on the IP address. 
As time passed by, more websites developed and it was hard to remember IP address for each website. Therefore, the Domain Name System was introduced which allows users to access the websites and its resoureces using the domain name eg. [www.example.com](https://www.example.com). It maps the unique domain name with a unique IP address.  

1. **Caching**: Caching is a mechanism to serve rsources faster. It is also called high-speed storage. It works between the web application and the source of the data. **Cookies** are used to cache data in the browser.
1. **Proxies**: It is also known as proxy server. The proxy server works between the client of the application and the internet. This requests to get resources from the internet from the application and it obtains resources to send them back to the application. Example: VPN that enables one to get blocked resources.

## Components of System Design.
1. ### Microservices and Service Delivery
Microservices lead the board after being used in most senarios to prepare software architecture designs. The microservices break down complex applications into small services eg service works independently and accomplishes specific tasks.  
The concepts below are related to microservices:
- **Service  Identification**: Every microservice has a unique ID  and name for its identification.
- **Dynamic Service Discovery**: Each microservice can dynamically find other services located in the same network, so scaling and load balancing becomes easy.
### Database System: RDBMS and NoSQL
Choosing the right database is important in the system design.
The are two primary databases that are:
1. #### RDBMS
This stands for the Relational Database Management System. The SQL databases are bulit on top of the RDBMS. This stores structured data which makes it easier to access the data from the database and connect it with other data that are stored in the table format.  
**Characteristics of the RDBMS**
- It stores data in the table format.
- It can be scalled vertically but not horizontally.
- SQL is a query language for the RDBMS databases.
- Accessing data from the RDBMS is slow.

2. #### NoSQL
The NoSQL database means a non SQL database. It stores the data in the key-value pair instead of in the table format. This is used when required to store unstructured data in the database.

**Characteristics of NoSQL Databases**
- It stores the data in the key-value pairs.
- NoSQL database is horizontally scalable as one can add new key-value pairs for new attributes.
- Each record can contain different key-value pairs.
- It is faster than RDBMS databases.
- It supports frequent changes in the database.

### Communication Protocals 
Protocals mean rules and communication protocals refer to the rules to communicate or exchange the data between two systems. The system can also be server and client.  
Here are some protocals:
- **HTTP/HTTPS**: It is Hypertext Transfer Protocal. HTTPS is a secure version of HTTP. They are used in web based communication.
- **TCP/IP**: The TCP stands for Transfer Control Protocal. The TCP protocal is used to communcate over the internet.
- **UDP**: The UDP is User Datagram Protocal. It is used in live streaming, video calls, etc.
- **WebSockets**: The websockets are used for the bi-directional duplex communication. It builds the connection between two web applications.