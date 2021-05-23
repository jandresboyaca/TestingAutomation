### How was created the a-priori data
Into the valid  and invalid-data you going to find  a method that create these data, you just have to copy  the  result into the key 'a-priori' of  *data* array

### Valid data

- node valid-data.js a-priori
- copy values into 'a-priori' key

### Invalid data

- node invalid-data.js a-priori
- copy values into 'a-priori' key

### Explanation
Each type of data will contain 3 different elements or strategy 

* a-priori
* pseudo-random
* random

And each of them will contain its data with the next structure

```
{
    name: '',
    slug: '',
    description: ''
}
```

In the case of *a-priori* and *pseudo-random* this will have the faker values used into them
Otherwise in the case of random this will have the function of faker to generate in each scenario the random data
### *a-priori* and *pseudo-random*
```
{
     name: faker.lorem.word(),
     slug: faker.lorem.word(),
     description: faker.lorem.paragraph()
}
```

###  *random*

```
{
     name: () => faker.lorem.word(),
     slug: () => faker.lorem.word(),
     description: () => faker.lorem.paragraph() 
}
```


### How were executed all the scenarios
#### Edit tags with invalid data
![image](https://user-images.githubusercontent.com/31944043/119234029-4c01c080-baf1-11eb-983d-152a7be87d7a.png)
The scenarios that failed, failed by random valid data generated


#### Create tag
![image](https://user-images.githubusercontent.com/31944043/119234044-57ed8280-baf1-11eb-8aec-a626a6fd4716.png)
The scenarios that failed, failed  by timeout into cypress

#### Edit tags with valid data
![image](https://user-images.githubusercontent.com/31944043/119271567-b5ec9980-bbc7-11eb-9293-3cacb0d5e625.png)
All the scenarios were executed successfully



