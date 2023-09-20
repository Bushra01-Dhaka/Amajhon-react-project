import { Link } from "react-router-dom";


const Profile = () => {
    return (
        <div className="text-center">
            <div className="flex justify-center items-center text-center gap-4">
            
            <img src="https://starsunfolded.com/wp-content/uploads/2015/11/Fawad-Khan-2.jpg" className="w-[80px] h-[80px] rounded-[50px]" alt="" />
            <h3 className="text-3xl font-medium">Fawad Khan</h3>
            
        </div>
        <p className="text-md py-4 border-b-2 border-gray-600 w-full md:w-[30%]  mx-auto  ">A Pakistani actor, producer, screenwriter, model and singer <br />
       <Link to='https://www.instagram.com/fawadkhan81/?hl=en'>@fawadkhan81</Link></p>
       
        </div>
    );
};

export default Profile;