import Image from "next/image";
import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import styles from "@/styles/Search.module.scss";

const Search = () => {
  return (
    <div className={styles.search}>
      <input type="search" placeholder="Search..."/>
      <div className={styles.icon}>
        <AiOutlineSearch />
      </div>
    </div>
  );
};

export default Search;
