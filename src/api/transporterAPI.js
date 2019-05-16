export async function getJobs() {
  let apiURL = 'http://5cac1d41c85e05001452eef0.mockapi.io/jobs'
  let jobsRequest = await fetch(apiURL)
  let { jobs } = await jobsRequest.json()
  return jobs
}