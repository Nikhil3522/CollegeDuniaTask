import { topCourses } from "../Constant";

const TopCourses = () => {
    return (
        <div className="topcoursesDiv">
            <h1>Top Courses</h1>
            {/* {topCourses.map((item, index) => (
                <div key={index} style={{backgroundColor: 'white', border: '1px solid gray', borderRadius: '20px', }}>
                    <p>{item}</p>
                </div>
            ))} */}
        </div>
    )
}

export default TopCourses;