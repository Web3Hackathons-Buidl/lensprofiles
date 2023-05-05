import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Feed } from '@lens-protocol/react-native-lens-ui-kit'
import { Profiles } from '@lens-protocol/react-native-lens-ui-kit'
import { ProfileHeader } from '@lens-protocol/react-native-lens-ui-kit'
import { Publication } from '@lens-protocol/react-native-lens-ui-kit'
import { ProfileListItem } from '@lens-protocol/react-native-lens-ui-kit'
import { Search, SearchType } from  '@lens-protocol/react-native-lens-ui-kit'
import {
  LensProvider,
  Theme,
  Environment
} from '@lens-protocol/react-native-lens-ui-kit'



export default function App() {
  return (
    <View style={styles.container}>
       
            <Feed />
            <Search/>
            {/* <Search searchType={SearchType.publication} /> */}
            <Profiles />
            <ProfileHeader />
            {/* <ProfileListItem profile={profile}/> */}
                          {/* <ProfileHeader
                handle="nader.lens"
                // or profileId={profileId}
                // or profile={profile}
              /> */}
            {/* <Publication publication={publication}/>      */}
          <StatusBar style="auto" />
           {/* <LensProvider environment={Environment.mainnet} theme={Theme.dark}> */}
          {/* <App />  */}
        {/* </LensProvider> */}
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
