# mern-full-auth-server-with-email-code-verification

## …or create a new repository on the command line

```bash
echo "# mern-full-auth-server-with-email-code-verification" >> README.md
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/cauvery-digital/mern-full-auth-server-with-email-code-verification.git
git push -u origin main
```

## …or push an existing repository from the command line

```bash
git add .
git commit -m "2nd commit"
git push origin main
```


## …or

```bash
git add . && git commit -m "2nd commit" && git push origin main
```

### Create your project folder && open with vscode or other IDE

## Clone this repo.

```bash
git clone https://github.com/cauvery-digital/mern-full-auth-server-with-email-code-verification.git
```

### ...then run this command in server folder
```bash
cd server
npm install
```

create .env file in server and add your config in .env file

PORT=4000
FRONTEND_URL="http://localhost:4173"
MONGO_URI= ""
JWT_EXPIRE=7d
JWT_SECRET_KEY=your-jwt-secrete
COOKIE_EXPIRE=7
SMTP_SERVICE=gmail
SMTP_MAIL= your@gmail.com
SMTP_PASSWORD= gmail-app-password
SMTP_HOST=smtp.gmail.com
SMTP_PORT=465

TWILIO_SID= 
TWILIO_PHONE_NUMBER= 
TWILIO_AUTH_TOKEN= 