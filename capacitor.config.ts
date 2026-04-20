import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
   appId: 'com.duvan.mydigitalwallet',
  appName: 'MyDigitalWallet',
  webDir: 'www',
plugins: {
  SocialLogin: {
    google: {
      clientId:'177101629115-af9vhkbu8opkuakrdn9vj48t043v0799.apps.googleusercontent.com'
    }
  }
}
};

export default config;
