import React, { useState, useEffect } from 'react';
import './AnnouncementPage.css';
import { getList } from './services/accounts';
import AnnouncementDetailsDialog from '../announcement_detail/AnnouncementDetailsDialog';
import axios from 'axios';

const CompanyName = ({ name }) => <h3 className='job-company'>{name}</h3>;

const Place = ({ name }) => <h3 className='job-place'>{name}</h3>;
const MyDate = ({ date }) => <h3 className='job-date'>{date}</h3>;

const JobName = ({ name }) => <h4 className='job-title'>{name}</h4>;

const Description = ({ detail }) => <p><span className='salary'>{detail}</span></p>;

const AnnouncementPage = () => {
  const [hiringAds, setHiringAds] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(20);
  const [searchQuery, setSearchQuery] = useState('');
  const [openDialog, setOpenDialog] = useState(false);
  const [selectedData, setSelectedData] = useState(null);

  useEffect(() => {
    const fetchUsers = async () =>{
      
      let baseURL;
      if (searchQuery.length > 0){
      baseURL = `https://teamup.liara.run/announcements/announcements/?page=${currentPage}&search=${searchQuery}`
      }
      else{
      baseURL = `https://teamup.liara.run/announcements/announcements/?page=${currentPage}`
      }
      const response = await axios.get(baseURL);
      // console.log(response)
      // setPageCount(Math.ceil(response.data.count / 10))
      console.log(currentPage)
      setHiringAds(response.data)
      setTimeout(()=>{console.log(response)},500)
      
    }
    fetchUsers()
  },[currentPage, searchQuery])
  useEffect(() => {
    const fetchData = async () => {
      const data = await getList();
      console.log(data);
      // setHiringAds([
      //   {
      //     id: 1,
      //     companyName: 'ABC Corp',
      //     jobName: 'Software Engineer',
      //     salary: 80000
      //   },
      //   {
      //     id: 2,
      //     companyName: 'XYZ Inc',
      //     jobName: 'Web Developer',
      //     salary: 70000
      //   },
      //   {
      //     id: 3,
      //     companyName: 'Digikala',
      //     jobName: 'Web Developer',
      //     salary: 20000,
      //     place: 'Tehran'
      //   },
      //   {
      //     id: 4,
      //     companyName: 'Amazon',
      //     jobName: 'IT specialist',
      //     salary: 60000
      //   },
      //   {
      //     id: 5,
      //     companyName: 'Amazon',
      //     jobName: 'AI engineer',
      //     salary: 80000
      //   },
      //   {
      //     id: 6,
      //     companyName: 'ABC Corp',
      //     jobName: 'Software Engineer',
      //     salary: 80000
      //   },
      //   {
      //     id: 7,
      //     companyName: 'XYZ Inc',
      //     jobName: 'Web Developer',
      //     salary: 70000
      //   },
      //   {
      //     id: 8,
      //     companyName: 'Digikala',
      //     jobName: 'Web Developer',
      //     salary: 20000,
      //     place: 'Tehran'
      //   },
      //   {
      //     id: 9,
      //     companyName: 'Amazon',
      //     jobName: 'IT specialist',
      //     salary: 60000
      //   },
      //   {
      //     id: 10,
      //     companyName: 'Amazon',
      //     jobName: 'AI engineer',
      //     salary: 80000
      //   }
      // ]);
    };
    fetchData();
  }, []);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleOpenDialog = () => {
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  const handleSelect = (data) => {
    setSelectedData(data);
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredAds = hiringAds.filter(ad =>
    // ad.companyName.toLowerCase().includes(searchQuery.toLowerCase()) ||
    ad.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredAds.slice(indexOfFirstItem, indexOfLastItem);

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(filteredAds.length / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  const maxVisibleButtons = 10;
  const indexOfLastPage = currentPage * itemsPerPage;
  const indexOfFirstPage = indexOfLastPage - itemsPerPage;
  const currentPages = pageNumbers.slice(indexOfFirstPage, indexOfLastPage);

  return (
    <>
      <div className='Announcement-page'>
        <header>
          <div className="navigation">
            <h1 className="title">Team up</h1>
            <a href="#" className="nav-item">Home</a>
            <a href="#" className="nav-item">Category</a>
            <a href="#" className="nav-item">About Us</a>
            <a href="#" className="nav-item">Contacts</a>
          </div>
        </header>
        <div className="announcement-container">
          <div className='search-container'>
            <input
              type="text"
              placeholder="Search..."
              value={searchQuery}
              onChange={handleSearchChange}
              className='search-bar'
            />
            <button className="search-button">Search</button>
          </div>
          <div className="announcement-container">
            <h1 className="announcement-title">Latest Job Announcements</h1>
            <div className="announcement-list">
              {currentItems.map(ad => (
                <div key={ad.id} className="announcement-item">
                  <CompanyName name={ad.title} />
                  {/* <Place name={ad.place} /> */}
                  {/* <JobName name={ad.jobName} /> */}
                  <Description detail={ad.description} />
                  <MyDate date={(new Date(ad.created_at)).toDateString()} />
                  <button onClick={() => {
                    handleSelect(ad);
                    handleOpenDialog();
                  }} className="view-details-button">View Details</button>
                </div>
              ))}
            </div>
          </div>
          <ul className="pagination">
            {currentPage !== 1 && (
              <li>
                <button onClick={() => handlePageChange(currentPage - 1)}>Prev</button>
              </li>
            )}
            {currentPages.map((number) => (
              <li key={number}>
                <button onClick={() => handlePageChange(number)} className={number === currentPage ? 'active' : ''}>
                  {number}
                </button>
              </li>
            ))}
            {currentPage !== pageNumbers.length && (
              <li>
                <button onClick={() => handlePageChange(currentPage + 1)}>Next</button>
              </li>
            )}
            {pageNumbers.length > maxVisibleButtons && (
              <li>
                <button onClick={() => handlePageChange(pageNumbers[pageNumbers.length - 1])}>Last</button>
              </li>
            )}
          </ul>
        </div>
      </div>
      {selectedData && (
        <AnnouncementDetailsDialog open={openDialog} handleClose={handleCloseDialog} id={selectedData.id} />
      )}
    </>
  );
};

export default AnnouncementPage;
