import ProfileHeader from '../components/profile/ProfileHeader'
import ProfileTweets from '../components/profile/profileTweets'
import Sidebar from '../components/Sidebar'
import Widgets from '../components/Widgets'

const style = {
  wrapper: `flex justify-center h-screen w-screen select-none bg-[#15202b] text-white`,
  content: `max-w-[1800px] w-3/3 flex justify-between`,
  mainContent: `flex-[3.5] border-r border-l border-[#38444d] overflow-y-scroll`,
}

const profile = () => {
  return (
    <div className={style.wrapper}>
      <div className={style.content}>
        <Sidebar initialSelectedIcon={'Profile'} />
        <div className={style.mainContent}>
          <ProfileHeader />
          <ProfileTweets />
        </div>
        <Widgets />
      </div>
    </div>
  )
}

export default profile
