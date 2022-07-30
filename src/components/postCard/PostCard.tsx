import React from 'react';
import {Image, TouchableOpacity, View} from 'react-native';
import {Text} from '../ui/text/Text';
import {AgEnum} from '../ui/text/text.types';
import postCardStyles from './postCard.styles';
import {IconSvgThreeDots} from '../../assets/icons/IconSvgThreeDots';
import {IconSvgFavorite} from '../../assets/icons/IconSvgFavorite';
import {IconSvgComment} from '../../assets/icons/IconSvgComment';
import {IconSvgShare} from '../../assets/icons/IconSvgShare';
import {IconSvgBookmark} from '../../assets/icons/IconSvgBookmark';

export const PostCard = () => {
  return (
    <View>
      <View style={postCardStyles.topContainer}>
        <View style={postCardStyles.flexRow}>
          <Image
            style={postCardStyles.avatar}
            source={{
              uri: 'https://cdnb.artstation.com/p/assets/images/images/015/400/625/large/jacob-noble-levi-1.jpg?1548186529',
            }}
          />
          <Text style={postCardStyles.postUsername} Ag={AgEnum.SUBTITLE}>
            friend_makaroni_asssss
          </Text>
        </View>
        <TouchableOpacity>
          <IconSvgThreeDots />
        </TouchableOpacity>
      </View>
      <View style={postCardStyles.imageContainer}>
        <Image
          style={postCardStyles.postImage}
          source={{
            uri: 'https://cdnb.artstation.com/p/assets/images/images/015/400/625/large/jacob-noble-levi-1.jpg?1548186529',
          }}
        />
      </View>
      <View style={postCardStyles.topContainer}>
        <View style={postCardStyles.flexRow}>
          <TouchableOpacity>
            <IconSvgFavorite />
          </TouchableOpacity>

          <TouchableOpacity style={postCardStyles.postIcon}>
            <IconSvgComment />
          </TouchableOpacity>

          <TouchableOpacity style={postCardStyles.postIcon}>
            <IconSvgShare />
          </TouchableOpacity>
        </View>
        <TouchableOpacity>
          <IconSvgBookmark />
        </TouchableOpacity>
      </View>
      <Text style={postCardStyles.postInfo} Ag={AgEnum.BOLD}>
        100 Likes
      </Text>
      <View>
        <Text
          numberOfLines={2}
          style={postCardStyles.postInfo}
          Ag={AgEnum.SUBTITLE}>
          <Text Ag={AgEnum.BOLD}>username{': '}</Text>
          Test comment lirum ipsum abra cadabra and more more interisting things
          Test comment lirum ipsum abra cadabra and more more interisting things
          Test comment lirum ipsum abra cadabra and more more interisting things
          Test comment lirum ipsum abra cadabra and more more interisting things
          Test comment lirum ipsum abra cadabra and more more interisting things
          Test comment lirum ipsum abra cadabra and more more interisting things
          Test comment lirum ipsum abra cadabra and more more interisting things
          Test comment lirum ipsum abra cadabra and more more interisting things
        </Text>
      </View>
    </View>
  );
};
