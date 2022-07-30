import React from 'react';
import {Image, ScrollView, TouchableOpacity, View} from 'react-native';
import {IconSvgLogo} from '../../assets/icons/IconSvgLogo';
import {IconSvgFavorite} from '../../assets/icons/IconSvgFavorite';
import {IconSvgMessage} from '../../assets/icons/IconSvgMessage';
import {IconSvgPlus} from '../../assets/icons/IconSvgPlus';
import homeScreenStyles from './homeScreen.styles';
import {AgEnum} from '../../components/ui/text/text.types';
import {Text} from '../../components/ui/text/Text';
import {TextHelper} from '../../helpers/TextHelper';
import {PostCard} from '../../components/postCard/PostCard';
import {HistoryData} from '../../store/HistoryData';

export const HomeScreen = () => {
  const data = HistoryData;
  return (
    <>
      <View style={homeScreenStyles.topContainer}>
        <IconSvgLogo />
        <View style={homeScreenStyles.topContainer}>
          <TouchableOpacity style={homeScreenStyles.iconTouchebleOpacity}>
            <IconSvgPlus />
          </TouchableOpacity>
          <TouchableOpacity style={homeScreenStyles.iconTouchebleOpacity}>
            <IconSvgFavorite />
          </TouchableOpacity>
          <TouchableOpacity>
            <IconSvgMessage />
          </TouchableOpacity>
        </View>
      </View>
      <ScrollView style={homeScreenStyles.mainScrollView}>
        <ScrollView
          style={homeScreenStyles.historyScrollView}
          horizontal={true}
          showsHorizontalScrollIndicator={false}>
          {data.map(item => (
            <View style={homeScreenStyles.historyItemContainer} key={item.id}>
              <TouchableOpacity
                style={[
                  homeScreenStyles.historyItem,
                  item.reviewed
                    ? homeScreenStyles.unreviewedHistory
                    : homeScreenStyles.reviewedHistory,
                ]}>
                <Image
                  style={homeScreenStyles.historyImage}
                  source={{
                    uri: item.avatar,
                  }}
                />
              </TouchableOpacity>
              <Text Ag={AgEnum.SUBTITLE} align={'center'}>
                {TextHelper.getUserHistoryName(item.name)}
              </Text>
            </View>
          ))}
        </ScrollView>
        {data.map((_, index) => (
          <PostCard key={index} />
        ))}
      </ScrollView>
    </>
  );
};
