import React, { useState, useEffect } from "react";
import styles from "./SearchPaginationUsers.module.css"
import { Multiselect } from "multiselect-react-dropdown";
import { Box, Pagination } from "@mui/material";

function SearchPaginationUsers() {
  const [items, setItems] = useState([]);
  const [query, setQuery] = useState("");
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [selectedOptionsForCity, setSelectedOptionsForCity] = useState([]);
  const [selectedOptionsForGender, setSelectedOptionsForGender] = useState([]);
  const [paginate, setpaginate] = useState(8);
  const [pageCount, setPageCount] = useState();
  const [page, setPage] = React.useState(1);
  const handleChange = (event, value) => {
    setPage(value);
  };

  const getData = () => {
    fetch("/src/services/data.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then(function (response) {
        return response.json();
      })
      .then(function (myJson) {
        setItems(myJson);
        setPageCount(Math.ceil(myJson.length / 8));
      });
  };
  console.log(items);
  useEffect(() => {
    getData();
  }, []);

  const data = Object.values(items);
  const search_parameters = Object.keys(Object.assign({}, ...data));
  console.log(data);

  function search(items) {
    return items.filter(
      (item) =>
        (selectedOptionsForGender.length === 0 ||
          selectedOptionsForGender.includes(item.gender)) &&
        (selectedOptionsForCity.length === 0 ||
          selectedOptionsForCity.includes(item.city)) &&
        (selectedOptions.length === 0 ||
          selectedOptions.includes(item.skill)) &&
        search_parameters.some((parameter) =>
          item[parameter].toString().toLowerCase().includes(query)
        )
    );
  }
  console.log(selectedOptions);

  const load_more = (event) => {
    setpaginate((prevValue) => prevValue + 8);
  };

  return (
    <div className={styles.users}>
      <div className={styles.wrapper}>
        <div className={styles.search_and_filter}>
          <div className={styles.search_wrapper}>
            <div className={styles.box}>
              <form name="search">
                <input
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  type="text"
                  className={styles.myinput}
                  name="txt"
                  onmouseout="this.value = ''; this.blur();"
                />
              </form>
              <i className="fas fa-search"></i>
            </div>
            {/* #### */}
            <div className={styles.multiselect_for_skills}>
              <Multiselect 
                isObject={false}
                options={[
                  "Frontend Developer",
                  "Backend developer",
                  "Software Engineer",
                  "AI Enginner",
                  "Fullstack Developer",
                  "IT Specialist",
                ]}
                showCheckbox={true}
                showArrow={true}
                closeIcon="circle2"
                hideSelectedList={true}
                onSelect={(selectedList) =>
                  setSelectedOptions(selectedList.map((option) => option))
                }
                onRemove={(selectedList) =>
                  setSelectedOptions(selectedList.map((option) => option))
                }
                placeholder="Select For Skills"
                style={{
                  chips: {
                    background: 'black'
                  },
                  multiselectContainer: {
                    color: 'black'
                  },
                  searchBox: {
                    border: '1px solid',
                    'border-radius': '20px',
                    padding:'13px'
                  }
                }}
              />
            </div>

            <div className={styles.multiselect_for_cities}>
              <Multiselect
                isObject={false}
                options={[
                  "Arak",
                  "Ghazvin",
                  "Ardebil",
                  "Kurdestan",
                  "Khozestan",
                  "Tehran",
                  "Shiraz",
                  "Karaj",
                ]}
                showCheckbox={true}
                closeIcon="circle2"
                hideSelectedList={true}
                showArrow={true}
                onSelect={(selectedList) =>
                  setSelectedOptionsForCity(
                    selectedList.map((options) => options)
                  )
                }
                onRemove={(selectedList) =>
                  setSelectedOptionsForCity(
                    selectedList.map((options) => options)
                  )
                }
                placeholder="Select For Cities"
                style={{
                  chips: {
                    background: 'black'
                  },
                  multiselectContainer: {
                    color: 'black'
                  },
                  searchBox: {
                    border: '1px solid',
                    'border-radius': '20px',
                    padding:'13px'
                  }
                }}
              />
            </div>

            <div className={styles.multiselect_for_gender}>
              <Multiselect
                isObject={false}
                options={["Male", "Female", "Rather Not Say"]}
                showCheckbox={true}
                closeIcon="circle2"
                hideSelectedList={true}
                showArrow={true}
                onSelect={(selectedList) =>
                  setSelectedOptionsForGender(
                    selectedList.map((options) => options)
                  )
                }
                onRemove={(selectedList) =>
                  setSelectedOptionsForGender(
                    selectedList.map((options) => options)
                  )
                }
                placeholder="Select For Gender"
                style={{
                  chips: {
                    background: 'black'
                  },
                  multiselectContainer: {
                    color: 'black'
                  },
                  searchBox: {
                    border: '1px solid',
                    'border-radius': '20px',
                    padding:'13px'
                  }
                }}
              
              />
            </div>

            {/* #### */}
          </div>
        </div>

        <ul className={styles.card_grid}>
          {search(data)
            .slice((page - 1) * 8, page * 8)
            .map((item) => (
              <li key={item.id}>
                <article className={styles.mycard}>
                  <div className={styles.card_image}>
                    <img className={styles.myimage}
                      src={item.image}
                      alt={item.first_name + " " + item.last_name}
                    />
                  </div>
                  <div className={styles.card_content}>
                    <h4 className={styles.card_name}>
                      {item.first_name + " " + item.last_name}
                    </h4>
                    <ol className={styles.card_list}>
                      <li>
                        <span>{item.email}</span>
                      </li>
                      <li>
                        <span>{item.gender}</span>
                      </li>
                      <li>
                        <span>{item.skill}</span>
                      </li>
                      <li>
                        <span>city: {item.city}</span>
                      </li>
                    </ol>
                  </div>
                </article>
              </li>
            ))}
        </ul>

        {/* <button onClick={load_more}>Load More</button> */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            
          }}
        >
          <Pagination
            sx={{my:6}}
            
            page={page}
            onChange={handleChange}
            variant="outlined"
            color="primary"
            showFirstButton
            showLastButton
            count={Math.ceil(search(data).length / 8)}
          />
        </Box>
      </div>
    </div>
  );
}

export default SearchPaginationUsers;
