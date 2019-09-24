![](images/Picture-Title.png)

# Lab 300 - Incorporating OIC Integration into VBCS Application

## Introduction

This lab will walk you through creating an incident page for logging incidents and also incorporating OIC Integration into the mobile application.

## Objectives

- Create a mobile page to record Incident
- Add a OIC service connection to the application
- Post data to OIC from the Mobile application

## Required Artifacts

- This lab assumes that you have completed [Lab 100](LabGuide100.md), [Lab 200](LabGuide200.md).

# Create Mobile Pages to record Incident

## Making Mobile Application Modifications

### **STEP 1**: Add OIC Service Connection

We will now add the Service Connection that we will use to retrive and post data to database via OIC.

- In your application development console, click on **Service Connections** icon in the far left panel.

  ![](images/300/image001.png)

- Add a service connection by press the **"+ Service Connection"** button.

  ![](images/300/image002.png)

- In the **Create Service Connection** window, we will choose **Select from Catalog** as our source.

  ![](images/300/image003.png)

- Select **Integration** as the Service Type

  ![](images/300/image004.png)

- In Create Service dialog box select the **CREATEINCIDENTS** and **GETINCIDENTS** under Default
Package and click **Create**. This will import the integration metadata into VBCS.

  ![](images/300/image005.png)

- Select **Endpoints** tab and you can see all the integration imported to vbcs.

  ![](images/300/image006.png)

- Open **GETINCIDENTS** by clicking on **GET**. you can see all the details regarding the OIC integration endpoint.

  ![](images/300/image007.png)

- Click on **Test** tab and click **send** to get the incidents.

  ![](images/300/image008.png)


- Now that the connection is configured we'll create UI to record incidents. To do so we'll set up a variable on the page to store the request from user input and then send the request to OIC via the service connection we created in step 1.

### **STEP 1**: Add a Create Incident Mobile Page

Now we'll add a page to Create Incident and once that is complete we'll define variable to store user input before sending to OIC ```CREATEINCIDENTS```

- Create new page by expanding the **healthsafetymobileapp --> flows --> home** and click the **+** icon near **home**.

  ![](images/300/image009.png)

- In **Create Page** pop-up window enter **Page Id** as ```home-createincident``` select **Custom** as page template and then click **Create**

  ![](images/300/image010.png)

- Open right navigation pane and change **Page Title** to ```Report Incident```

  ![](images/300/image011.png)

- Before We create out form layout for submitting request to create incident, let us create an object type and variable that will store the user inpit.

- Open **Variable $ Types** tab by Clicking on **(x)** icon

  ![](images/300/image012.png)

- Click on **Types** tab then click **+ Types** button and select **From Endpoint**

  ![](images/300/image013.png)

- Expand **Service Connections --> ics --> CREATEINCIDENTS** Select **POST** operation and click **Next**

  ![](images/300/image014.png)

- From endpoint structure expand **Request** and select all **expect IncidentNo** and click **Finish** 

  ![](images/300/image015.png)

- Now Click on **Variables** tab and click **+ Variable** button to create variable to store user input

  ![](images/300/image016.png)

- Enter **id** as ```createIncident``` and select **Type** as ```postCREATEINCIDENTS1_0IncidentCreate``` and click **Create & New**

  ![](images/300/image017.png)

- Create another variable and enter **id** as ```capturedImage``` and select **Type** as ```String``` and click **Create & New**

  ![](images/300/image018.png)

- Create last variable and enter **id** as ```empName``` and select **Type** as ```String``` and click **Create**

  ![](images/300/image018.png)

- Now we have defined our variables let us create the form to take user input. Go back to **Designer** page by clicking the icon show below.

  ![](images/300/image019.png)

- Now, Drag and Drop **Form Layout** from Components on top of **Flex Container** in page structure.

  ![](images/300/image020.png)

- Now Drag and Drop **Input Text** from Components on top of **Form Layout** in page structure.

  ![](images/300/image021.png)

- In left Navigation Panel under **General** tab Enter **Label Hint** as ```Employee ID```

- Now open **Data** tab and click **down arrow** next to **fx** and select ```EmployeeID``` under **createIncident** object

  ![](images/300/image022.png)

- Similarly Drag and drop another **Input Text** from Components on top of **Form Layout** in page structure.

  ![](images/300/image023.png)

- In left Navigation Panel under **General** tab Enter **Label Hint** as ```Name```

- Now open **Data** tab and click **down arrow** next to **fx** and select ```empName``` 

  ![](images/300/image024.png)

- Now Drag and Drop **Select (one)** from Components on top of **Form Layout** in page structure.

  ![](images/300/image025.png)

- In left Navigation Panel click **Add Options** to populate drop-down data

  ![](images/300/image026.png)

- In Add Options pop-up Choose the source of your data as **Sites** under Business Object and click **Next**

  ![](images/300/image027.png)

- From endpoint structure under response drag and drop **siteName** in Label and **id** under value and then click **Next**

  ![](images/300/image028.png)

- Click **Finish** to close dialog box.

- Click on **General** tab and change Label hint to ```Site``` and Placeholder to ```Select Site```

  ![](images/300/image029.png)

- Now open **Data** tab and click **down arrow** next to **fx** and select ```SiteID``` under **createIncident** object

  ![](images/300/image030.png)

- Now Drag and Drop **Radio Button Set** from Components on top of **Form Layout** in page structure.

  ![](images/300/image031.png)

- In left Navigation Panel click **Create Static List of Options** to create options for radio button

- In pop up enter following options
Label : Value
High : high
Medium : med
Low : low

- Click **Finish** to close the pop-up

  ![](images/300/image032.png)

- Click on **General** tab and change Label hint to ```Severity```

  ![](images/300/image033.png)

- Now open **Data** tab and click **down arrow** next to **fx** and select ```Severity``` under **createIncident** object

  ![](images/300/image036.png)

- - Now Drag and Drop **Text Area** from Components on top of **Form Layout** in page structure.

  ![](images/300/image034.png)

-  In left Navigation Panel change Label hint to ```Description```

- Now open **Data** tab and click **down arrow** next to **fx** and select ```Description``` under **createIncident** object

  ![](images/300/image035.png)

- Drag and Drop **Image** from Components on top of **Form Layout** in page structure.

  ![](images/300/image037.png)

- Now open **Data** tab and click **down arrow** next to **fx** and select ```capturedImage``` 

  ![](images/300/image038.png)

- Drag and Drop **Button** from Components on top of **Form Layout** in page structure. Empty **Label Text** , **Text** as ```Take Picture``` and chroming **Full**

  ![](images/300/image039.png)

- Drag and Drop another **Button** from Components on top of **Form Layout** in page structure. Empty **Label Text** , **Text** as ```Submit``` and chroming **Full**

  ![](images/300/image040.png)


### **STEP 2**: Define action chains

In this steps we will define action chains to take picture from camera and submit the data to call OIC service for posting data into database. Also we will see how to write custom client-side javascript to display the image in UI and convert blob to base64String so that database can store it. 

- Click on **JS** button on the navigation pane and copy paste the below javascript functions, after ```var PageModule = function PageModule() {};``` and before ```return PageModule;```

```javascript
      //This function loads/displays the picture in image field (UI)
  PageModule.prototype.showPic = function(fileBlob) {
    const blobURL = URL.createObjectURL(fileBlob);
    // Release the BLOB after it loads.
    document.getElementById("img-1689111029-1").onload = function() {
      URL.revokeObjectURL(blobURL);
    };
    return blobURL;
  };
  
    // This function will convert blob to base64String
  PageModule.prototype.convertToBase64String = function(fileBlob) {
    return new Promise((resolve, reject) => {
      var base64String;
      var reader = new FileReader();
      reader.readAsDataURL(fileBlob);
      reader.onloadend = () => {
        let base64dataURL = reader.result;
        base64String = base64dataURL.split(',')[1];
        //console.log(base64String);
        resolve(base64String);
      };
    });

  };
```
  ![](images/300/image041.png)


- Go back to designer page from navigation pane

- Select **Take Picture** button and click **Events** tab

  ![](images/300/image042.png)

- Click **+ New Event** and Select **Quick Start** action

  ![](images/300/image043.png)

- This will open up the action chain flow. Enter action chain id as ```TakePicture```

  ![](images/300/image044.png)

- From General Actions Drag and drop **Take Photo** action on the action chain.

  ![](images/300/image045.png)

- Next Drag and drop **Call Module Function** after **Take Photo** and click **Select Module function** button on right panel

  ![](images/300/image046.png)

- From pop-up Select Page function as **showPic** and click **Select** Note:These are the same javascript function we wrote

  ![](images/300/image047.png)

- From right panel click **Assign** button to map input Parameter to our function

  ![](images/300/image048.png)

- In the pop-up from sources expand **takePhoto1** and drag the **file** variable to **fileBllob** on Target, then click **Save**

  ![](images/300/image049.png)

- Select Return Type as **String**

- Again Drag and drop **Call Module Function** after **callModuleFunction show pic** and click **Select Module function** button on right panel

  ![](images/300/image050.png)

- From pop-up Select Page function as **convertToBase64String** and click **Select**

  ![](images/300/image051.png)

- From right panel click **Assign** button to map input Parameter to the function

  ![](images/300/image048.png)

- In the pop-up from sources expand **takePhoto1** and drag the **file** variable to **fileBllob** on Target, then click **Save**

  ![](images/300/image049.png)

- Select Return Type as **String**

- Now From General Actions Drag and drop **Assign Variable** action on the action chain after **callModuleFunction convertToBase64String** then click **Assign** to assign value to variables.

  ![](images/300/image052.png)

- Map the **callModuleFunction1** from Source to **capturedImage** on Target, similarly mao **callModuleFunction2** from source to **Image** (under createIncident Object). Click **Save** to close the pop-up

- Now again Go back to designer page from navigation pane

- Select **Submit** button from page structure and click **Events** tab

  ![](images/300/image053.png)

- Click **+ New Event** and Select **Quick Start** action

  ![](images/300/image043.png)

- This will open up the action chain flow. Enter action chain id as ```SubmitData```

  ![](images/300/image054.png)

- From General Actions Drag and drop **Call REST Endpoint** action on the action chain and click on **Select Endpoint** button from right panel.

  ![](images/300/image055.png)

- To Select OIC endpoint From the pop-up expand **Service Connections --> ics --> CreateIncidents --> POST** then click **Select**

  ![](images/300/image056.png)

- Click **Assign** button next to paramater

  ![](images/300/image057.png)

- In the pop-up drag and drop **createIncident** object from source to **body** parameter on target. Click **Save** to close the pop-up

  ![](images/300/image058.png)

- Now from General Actions drag and drop **Fire Notification** on **success** path and in right panel enter **Summary** as ```Incident Created Successfully``` and **Notification Type** as **confirmation**

  ![](images/300/image059.png)

- Similarly from General Actions drag and drop **Fire Notification** on **failure** path and in right panel enter **Summary** as ```Incident creation Failed``` and **Notification Type** as **error**

  ![](images/300/image060.png)

- Now before testing our app lets go back to **home-start** page and select **Incident** button and select **Events** tab from right panel

  ![](images/300/image061.png)

- Click **+ New Event** and Select **Quick Start** action

  ![](images/300/image043.png)

- This will open up the action chain flow. Enter action chain id as ```navToCreateIncident```

  ![](images/300/image062.png)

- From Navigation Actions Drag and drop **Navigate** action on the action chain and click on **Select Target** button from right panel.

  ![](images/300/image063.png)

- From the pop-up select **Peer Page**

  ![](images/300/image064.png)

- Now Select **home-createincident** and click **Select button**.

  ![](images/300/image065.png)


- Let's test our app until this point click on **Play** button on top right side. This will launch the app in new tab.

  ![](images/300/image066.png)

- You should be able to see your app in emulator as shown below.

  ![](images/300/image067.png)

- Now Click on **Incident** Enter the **details**, **upload picture** and hit **Submit** 

- If you get the error check browser console as shown below

  ![](images/300/image068.png)

- **This completes Lab 300 and the Workshop**
