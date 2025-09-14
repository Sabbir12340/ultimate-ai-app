# Ultimate_AI_App (placeholder project)

এই রিপোজিটরিটি `Ultimate_AI_App` প্রজেক্টের নমুনা ফাইলগুলো ধারণ করে।

## ফোল্ডার স্ট্রাকচার
- backend/
  - package.json
  - server.js
- frontend/
  - index.html
  - app.js
  - style.css
- README.md

## কী করা হয়েছে
- আমি এখানে ছোট placeholder (ডেমো) কোড দিলাম যাতে তুমি দ্রুত লোকালি টেস্ট করতে পারো।
- তুমি তোমার নিজস্ব কোড গুলো প্রতিস্থাপন করে ফেলতে পারো (copy-paste)।

## লোকালি চালানোর নির্দেশ (Node.js প্রয়োজন)
1. টার্মিনাল/কমান্ড প্রম্পট খুলে `backend` ফোল্ডারে যাও:
   ```bash
   cd backend
   npm install
   npm start
   ```
2. ব্রাউজারে খোলো: http://localhost:3000
   (frontend/index.html ফাইলটি backend server থেকে সার্ভ হবে)

## GitHub এ আপলোড করার পর (টিপস)
- GitHub web UI থেকে zip আপলোড করলে GitHub হয়ে ভেতরের ফাইল extract করে দেয় না। তাই সাধারণত এনগুলো করা হয়:
  1. লোকালি unzip করে ফোল্ডারের ভিতরকার সব ফাইল GitHub → Add file → Upload files এ drag & drop করা
  2. অথবা git ব্যবহার করে (যদি পরিচিত হও):
     ```bash
     git init
     git add .
     git commit -m "Initial commit"
     git branch -M main
     git remote add origin https://github.com/USERNAME/Ultimate_AI_App.git
     git push -u origin main
     ```

## পরবর্তী ধাপ
- তুমি যদি এখন তোমার আসল কোডগুলো এখানে paste করে দাও, আমি সেগুলো ফাইলগুলোতে বসিয়ে আবার zip বানিয়ে দিবো এবং সরাসরি ডাউনলোড লিংক দেবো।
- অথবা আমি দেখিয়ে দিতে পারি কিভাবে GitHub এ আপলোড + extract (আচরণ) করতে হয় step-by-step।
