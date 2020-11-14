# Sunship.io
## Where the sun is free, the fun is rented, and the memories are forever

![](https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/USRC_Salmon_P_Chase_-_LoC_4a25817u.jpg/440px-USRC_Salmon_P_Chase_-_LoC_4a25817u.jpg)

### API Planning Lab

#### Data-modeling and designing an API

In this course, we stay indoors, we don't interact with the outside world much, and we jump into stuff without much planning.

Let's try to change one of those things today!

We'll create an ERD (Entity Relationship Diagram) to help with planning out your API's. What is an ERD? As in the name, it's a diagram that allows you to map out the relationships and columns of your data before you jump right into coding it so that you have a clearer vision of what your API will look like.

#### Examples

Here is an example ERD: 

> ![](https://imgur.com/ur7JiYl.png)

> [source](https://www.researchgate.net/figure/EERD-of-Telemedicine-Web-Service_fig1_283635381)

Each table is represented as a rectangle, and there a multiple lines connecting the tables, which represent relationships

Here is a really nice key (but note, there are a lot of different flavors to these symbols)

> ![](https://cacoo.com/wp-app/uploads/2018/05/ER-notation-1.png)

> [source](https://cacoo.com/blog/er-diagrams-vs-eer-diagrams-whats-the-difference/)

#### Thoughts while creating an ERD

You can draw one:
- on paper
- on a whiteboard
- with an app

Considerations:

Is your data
- Stable? Will it support business needs?
- Has breadth? Can all the data be stored in an organized way?
- Is the model as simple as possible?
- Can it be reorganized (relatively) easily?
- Can both creators and users understand what is going on?

> [source](https://www.lucidchart.com/pages/enhanced-entity-relationship-diagram#section_2)

---

## The Activity 

Your activity for today's morning lab is to create an ERD for the following "business". You can create your ERD on paper, on a whiteboard, with an app, etc - however you want. The main goal here is just for you to practice creating one and planning API's beforehand. 

### The Business: Outdoor Equipment Rentals

We want to create the api for an outdoor rental business

Let's think about some the data we may need just to get you started.

As you build out your ERD, you may want to add, remove and change what is here, depending on how you end up visualizing this business

- customers
  - name
  - address
  - membership (trial, single, family, corporate discount)

- store locations
  - address
  - staff
  - equipment on hand

- staff info
  - you've got this!

-  rental
    - staffer who made the transaction
    - customer
    - inventory
    - rental start
    - rental end

- equipment
  - type (water, winter etc.)
  - store location
  - is rented?
  - condition (new, excellent, fair - maybe a photo for insurance purposes?)
  - level of insurance required to rent
  - recommended additional equipment (ie if kayak, then life vest, oars, first aid kit, roof rack....)
  - cost to rent
  - how many people to use it (single, pair, group...)
  - experience level (novice, expert)
  - cost to replace
  - brand


[inspiration/resource](https://www.visual-paradigm.com/guide/data-modeling/what-is-entity-relationship-diagram/)


Finally, find another person/group to share your ERD and talk through each of your versions. Note any things you may have missed or could have done differently.
