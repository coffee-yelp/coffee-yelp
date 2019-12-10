# coffee-yelp
BY:
Akshay Prabhakar
Nikki Consolacion
Matthew Garcia
Matthew Lang


## How to Run
1. Clone repo and install dependencies
```bash
git clone https://github.com/coffee-yelp/coffee-yelp.git
cd coffee-yelp-1
npm install
```

2. Configure API Key

Make sure you get an API Key from Yelp's [Developer Page](https://www.yelp.com/developers/v3/manage_app)
and opt in to the Developer Beta (this is needed to use the GraphQL API).

Then, put that API key into a file called `.env` in the project's root directory with the following format:
```
GOOGLE_API_KEY=${YOUR_KEY_HERE}
YELP_API_KEY=${YOUR_KEY_HERE}
```

3. Start the app and open it in the Expo Client:

npm run ios
```
