![](images/100/Picture-Title.png)

# LabGuide 100 - Creating the ATP Integration on OIC

## Introduction

The Health&Safe department is trying to secure their construction sites by allowing employees to report the security issues. To
be able to provide a convenient and efficient way, they plan to take advantage of VBCS and build a PWA application. Meanwhile,
the admin team can monitor all the incidents and take actions on time.

This is the first of several labs that are part of the **Oracle Visual Builder Cloud Service Workshop.** During this workshop you will explore Oracle's  Application Integration, and Visual Builder Cloud Service and its features from the persona of **Javascript Developer**, Joy. You will follow Joy as he creates an integration, and links your on premise database or Autonomous Database to the PWA application. In our first lab you will create an integration using ATP adapter to be able to store the new created incidents there.

## Objectives

- Explore the Application Integration
  - Configure the connections of ATP
  - Build the integration to insert data on ATP
  - Export/Import the Integrations to your environment

# Using OIC to Connect the Database

##  Create the InsertIncidents Integration

### Step 1 Launch the OIC homepage, click the Integration tab
![](images/100/oic1.png)

### Step 2  Open the **Connection** and click **Create**
![](images/100/oic2.png)

### Step 3 Search the ATP and select it
![](images/100/oic3.png)

### Step 4 Give it a proper name and some description:
![](images/100/oic4.png)

### Step 5 Fill in the connection and security authentication details
![](images/100/oic5.png)

### Step 6 Test it and save it

### Step 7 Similarly, create a Rest connection like the above
![](images/100/oic6.png)

### Step 8 Give the rest connection a name without the connection and security authentication details
![](images/100/oic7.png)

### Step 9 Now, let's move to Integration tab, and click the Create on the top right
![](images/100/oic8.png)

### Step 10 Choose the App-Driven architecture
![](images/100/oic9.png)

### Step 11 Give it a proper name and click on create
![](images/100/oic10.png)

### Step 12 An empty canvas will appear and click on the + sign to add the Rest Connection you just created
![](images/100/oic11.png)

### Step 13 Give it a proper name, fill the information like the screenshot, and click Next
![](images/100/oic12.png)
![](images/100/oic13.png)

### Step 15 After you click Finish, there is a map created along with the connection
![](images/100/oic14.png)

### Step 16 Click the + sign again to add the ATP connection
![](images/100/oic16.png)

### Step 17 Give it a proper name. Choose what you want to do with the database, here we are trying to insert instances to database
![](images/100/oic17.png)

### Step 18  Click Next, choose **Admin** as Schema and hit search. Locate **Incidents** table and Import tables
![](images/100/oic18.png)

### Step 19 Select all the attributes except **status comments incidentID**
![](images/100/oic19.png)

### Step 20 Click Next and click **Edit**
![](images/100/oic20.png)

### Step 21 Click on finish and you will see two mappers on the canvas


### Step 22 Now let's do the mapping. Click on the first mapper
![](images/100/oic21.png)

### Step 23 Map the attributes and click Validate on the top right corner
![](images/100/oic22.png)

### Step 24 Go to the second mapper
![](images/100/oic23.png)

### Step 25 Click on the Status
![](images/100/oic24.png)

### Step 26 Type in "Success" and click Save
![](images/100/oic26.png)

### Step 27 Last step is to add the tracking, click the hamburger icon on the top right corner
![](images/100/oic27.png)

### Step 28 Go back to the homepage and click on the Activate button
![](images/100/oic28.png)

### Step 29 Allow Tracking and Payload
![](images/100/oic29.png)

Note: Now your first integration is finished and you can test it on Postman
