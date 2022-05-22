import { BsStars } from 'react-icons/bs'
import TweetBox from './TweetBox'
import Post from '../Post'

const style = {
  wrapper: `flex-[3.5] border-r border-l border-[#38444d] overflow-y-scroll n0-scrollbar`,
  header: `sticky top-0 bg-[#15202b] z-10 p-4 flex justify-between items-center`,
  headerTitle: `text-xl font-bold`,
}

const tweets = [
  {
    displayName: 'Claracodess',
    userName: '0x9364D4b6061b481dB56142A0E6E48e10FeA6A9C4',
    avatar: 'https://i.postimg.cc/ZKHTHj0W/NKY-6204.jpg',
    text: 'Hello dear',
    isProfileImageNft: false,
    timestamp: '2022-03-01T12:00:00.000Z', // this is how sanity stores timestamp
  },
  {
    displayName: 'Claracodess',
    userName: '0x9364D4b6061b481dB56142A0E6E48e10FeA6A9C4',
    avatar: 'https://i.postimg.cc/ZKHTHj0W/NKY-6204.jpg',
    text: 'Hello dear',
    isProfileImageNft: false,
    timestamp: '2022-02-01T12:00:00.000Z', // this is how sanity stores timestamp
  },
  {
    displayName: 'Claracodess',
    userName: '0x9364D4b6061b481dB56142A0E6E48e10FeA6A9C4',
    avatar: 'https://i.postimg.cc/ZKHTHj0W/NKY-6204.jpg',
    text: 'Hello dear',
    isProfileImageNft: false,
    timestamp: '2022-01-01T12:00:00.000Z', // this is how sanity stores timestamp
  },
  {
    displayName: 'Claracodess',
    userName: '0x9364D4b6061b481dB56142A0E6E48e10FeA6A9C4',
    avatar: 'https://i.postimg.cc/ZKHTHj0W/NKY-6204.jpg',
    text: 'Hello dear',
    isProfileImageNft: false,
    timestamp: '2022-01-01T12:00:00.000Z', // this is how sanity stores timestamp
  },
  {
    displayName: 'Claracodess',
    userName: '0x9364D4b6061b481dB56142A0E6E48e10FeA6A9C4',
    avatar: 'https://i.postimg.cc/ZKHTHj0W/NKY-6204.jpg',
    text: 'Hello dear',
    isProfileImageNft: false,
    timestamp: '2022-01-01T12:00:00.000Z', // this is how sanity stores timestamp
  },
  {
    displayName: 'Claracodess',
    userName: '0x9364D4b6061b481dB56142A0E6E48e10FeA6A9C4',
    avatar: 'https://i.postimg.cc/ZKHTHj0W/NKY-6204.jpg',
    text: 'Hello dear',
    isProfileImageNft: false,
    timestamp: '2022-01-01T12:00:00.000Z', // this is how sanity stores timestamp
  },
  {
    displayName: 'Claracodess',
    userName: '0x9364D4b6061b481dB56142A0E6E48e10FeA6A9C4',
    avatar: 'https://i.postimg.cc/ZKHTHj0W/NKY-6204.jpg',
    text: 'Hello dear',
    isProfileImageNft: false,
    timestamp: '2022-01-01T12:00:00.000Z', // this is how sanity stores timestamp
  },
]

const Feed = () => {
  return (
    <div className={style.wrapper}>
      <div className={style.header}>
        <div className={style.headerTitle}>Home</div>
        <BsStars />
      </div>
      <TweetBox />
      {tweets.map((tweet, index) => (
        <Post
          key={index}
          displayName={tweet.displayName}
          userName={`${tweet.userName.slice(0, 4)}...${tweet.userName.slice(
            -4
          )}`}
          avatar={tweet.avatar}
          text={tweet.text}
          isProfileImageNft={tweet.isProfileImageNft}
          timestamp={tweet.timestamp}
        />
      ))}
    </div>
  )
}

export default Feed
