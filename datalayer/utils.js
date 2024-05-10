export const sortJobsByCompanyName = ({ jobs }) => {
  const sortedJobs = [...jobs];
  sortedJobs.sort(function (job1, job2) {
    if (job1.company.name < job2.company.name) return -1;
    else if (job1.company.name > job2.company.name) return 1;
    return 0;
  });

  return sortedJobs;
};

export const sortJobsByBaseAnnualSalary = ({ jobs, ASC = true }) => {
  const sortedJobs = [...jobs];
  sortedJobs.sort(function (job1, job2) {
    if (job1.baseAnnualSalary < job2.baseAnnualSalary) return ASC ? -1 : 1;
    else if (job1.baseAnnualSalary > job2.baseAnnualSalary) return ASC ? 1 : -1;
    return 0;
  });

  return sortedJobs;
};

export const sortJobsByDatePosted = ({ jobs, ASC = true }) => {
    const sortedJobs = [...jobs];
    sortedJobs.sort(function (job1, job2) {
      if (job1.datePosted < job2.datePosted) return ASC ? -1 : 1;
      else if (job1.datePosted > job2.datePosted) return ASC ? 1 : -1;
      return 0;
    });
  
    return sortedJobs;
  };