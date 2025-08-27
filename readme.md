
###  Answer the following questions clearly:

1. What is the difference between **getElementById, getElementsByClassName, and querySelector / querySelectorAll**?
2. How do you **create and insert a new element into the DOM**?
3. What is **Event Bubbling** and how does it work?
4. What is **Event Delegation** in JavaScript? Why is it useful?
5. What is the difference between **preventDefault() and stopPropagation()** methods?

---
1. Difference between getElementById, getElementsByClassName, and querySelector /     
   querySelectorAll:

  getElementById: একটি নির্দিষ্ট ID আছে এমন element নির্বাচন করার সময় আমরা  getElementById ব্যবহার করি। এটি ব্যবহার করে আমরা নির্দিষ্ট element এ ইভেন্ট যুক্ত করতে পারি।

  getElementsByClassName: একটি নির্দিষ্ট class আছে এমন সব elements নির্বাচন করার সময় আমরা  getElementsByClassName ব্যবহার করি। আমরা একসাথে অনেকগুলো element কে একই Class Name দিয়ে একসাথে    ইভেন্ট যুক্ত করতে পারি।

  querySelector: যে কোন CSS selector (ID, class, tag) ব্যবহার করে প্রথম element নির্বাচন করার সময় আমরা querySelector ব্যবহার করে থাকি। 

  querySelectorAll: CSS selector ব্যবহার করে সব element নির্বাচন করার সময় আমরা querySelectorAll ব্যবহার করে থাকি। এটি NodeList আকারে দেয়, যা array-এর মতো কাজ করে।

2. How to create and insert a new element into the DOM
   প্রথমে document.createElement() দিয়ে নতুন element তৈরি করতে হবে । তারপর যে জায়গায় এলিমেন্টি যুক্ত করতে হবে, সেই পেরেন্টে appendChild দিয়ে যুক্ত করতে হবে।

3. Event Bubbling:
   Event bubbling তখন ঘটে যখন child element-এ কোনো event হয়, তা parent, তার parent ইত্যাদির উপরও trigger হয়। Event bubbling, Event child থেকে শুরু হয় এবং উপরের দিকে উঠে যায়।

4. Event Delegation:
   Event Delegation মানে হলো, অনেক child element-এর জন্য আলাদা আলাদা event listener যোগ না করে, একটি parent element-এ listener যোগ করা। যার ফলে Parent element এ addEventListener        থাকে। Event ঘটলে আমরা event.target দেখে বুঝি কোন child element click হয়েছে।

5. Difference between preventDefault() and stopPropagation()
   preventDefault():এটি browser-এর default action বন্ধ করে। যেমন link click করলে page open না হওয়া বা form submit না হওয়া।

   stopPropagation(): এটি event bubbling বন্ধ করে, মানে parent element-এর listener trigger হবে না।
