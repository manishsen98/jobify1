const createJob = async(req, res) => {
    res.send("createJob")
}

const getAllJobs = async(req, res) => {
    res.send("get all jobs")
}

const updateJob = async(req, res) => {
    res.send("update jobs")
}

const deleteJob = async(req, res) => {
    res.send("delete job")
}

const showStats = async (req, res) => {
    res.send("show stats")
}
 

export {createJob, deleteJob, getAllJobs, updateJob, showStats}