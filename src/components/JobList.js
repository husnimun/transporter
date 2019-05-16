import React from "react";
import PropTypes from "prop-types";
import JobCard from "./JobCard";
import { connect } from 'react-redux'
import { addJobs } from '../store/actions'
import { getJobs } from '../api/transporterAPI'

class JobList extends React.Component {

  componentDidMount() {
    this.props.initJobs()
  }

  render() {
    const { jobs } = this.props
    return (
      <div className="JobList">
        {jobs.map(job => (
          <JobCard key={job.id} {...job}/>
        ))}
      </div>
    );
  }
}

JobList.propTypes = {
  jobs: PropTypes.array
};

const mapStateToProps = state => {
  let jobs = state.jobs
  return {
    jobs
  }
}

const mapDispatchToProps = dispatch => {
  return {
    initJobs: () => {
      getJobs().then(jobs => {
        dispatch(addJobs(jobs))
      })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(JobList);
