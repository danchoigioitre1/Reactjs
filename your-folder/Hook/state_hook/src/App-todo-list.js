import { useState } from 'react'

function App() {

    const [job, setJob] = useState('')
    const [jobs, setJobs] = useState(
        () => {
            // get info from localStorage
            const storageJobs = JSON.parse(localStorage.getItem('jobs'))
            return storageJobs
        }
    )



    const handleAdd = () => {
        setJobs(prev => {
            const newJobs = [...prev, job]

            // Save to localStorage
            const jsonJobs = JSON.stringify(newJobs)
            localStorage.setItem('jobs', jsonJobs)
            return newJobs
        })
        setJob("")
    }
    return (
        <div>
            <input
                value={job}
                onChange={e => setJob(e.target.value)}

            />
            <button onClick={handleAdd}>Add</button>
            <ul> {jobs.map((job, index) => (
                <li key={index}>{job}</li>
            ))}
            </ul>

        </div>
    )

}

export default App