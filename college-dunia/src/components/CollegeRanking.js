import { collegeRanking } from "../Constant";

const CollegeRanking = () => {
    return (
        <div>
            <h1>College Ranking 2023</h1>

            <table className="clgRankingTable">
            <colgroup>
                <col style={{ width: '50%' }} />
                <col style={{ width: '25%' }} />
                <col style={{ width: '25%' }} />
            </colgroup>
                <thead>
                    <tr>
                        <th>College</th>
                        <th>Ranking</th>
                        <th>Streams</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        collegeRanking.map((item ,index) => (
                            <tr key={index}>
                                <td style={{ display: 'block', height: '50px', padding: '5px' }}>
                                    <div style={{display: 'flex'}}  >
                                    <div style={{border: '1px solid gray', borderRadius: '50%', width: '30px', height: '30px',padding: '2px', overflow: 'hidden', marginTop: '8px', marginRight: '5px'}}>
                                        <img src={item.icon} width="30px" height="30px"/>
                                    </div>
                                    <p>{item.name}</p>
                                    </div>
                                </td>
                                <td>{item.rank} out of 40</td>
                                <td>{item.stream}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default CollegeRanking;