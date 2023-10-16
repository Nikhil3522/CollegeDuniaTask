import { topTenColleges } from "../Constant";


const TopTenCollege = () => {
    return (
        <div>
            <h1>Top 10 College</h1>

            <table className="topTenCollegeTable">
                <thead>
                    <tr>
                        <th>Rank</th>
                        <th>College</th>
                        <th>Ranking</th>
                        <th>Cutoff</th>
                        <th>Application Deadline</th>
                        <th>Fees</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        topTenColleges.map((item, index) => (
                            <tr key={index}>
                                <td>#{item.rank}</td>
                                <td>{item.name}</td>
                                <td>{item.ranking}</td>
                                <td>{item.cutoff}</td>
                                <td>{item.applicationDeadline}</td>
                                <td>{item.fees} {item.feesDescription}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default TopTenCollege;