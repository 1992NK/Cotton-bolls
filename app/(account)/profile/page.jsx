import styles from './profilePage.module.css'
import ProfileSidebar from "../components/profile/ProfileSidebar";
import EditProfile from "../components/profile/EditProfile";
import Header from '@/component/header/Header';
import Footer from '@/component/footer/Footer';
const ProfilePage = () => {
    return (

        <>
        
        <Header />

        <section className={styles.profilePage}>
            <div className="container">
                <div className={styles.profileRow}>
                    {/* Left Sidebar */}
                    <aside className={styles.profileSidebar}>
                        <ProfileSidebar />
                    </aside>
                    {/* Right Content */}
                    <section className={styles.profileContent}>
                        <EditProfile />
                    </section>
                </div>
            </div>
        </section>

        <Footer />
        
        
        </>

    );
}

export default ProfilePage