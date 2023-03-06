import { useState, useId } from "react";
import styles from "./Filter.module.scss";

import Select from "react-select";

import { Vehicle } from "@/types/filter.types";
import { brands, categories, sort } from "@/db/filter.db";

const Filter = ({ total }: { total: number }) => {
  const [selectedCategory, setSelectedCategory] = useState<any>();
  const [selectedBrand, setSelectedBrand] = useState<any>();
  const [sortBy, setSortBy] = useState<any>();

  return (
    <div className={styles.filter}>
      <div className={styles.top}>
        <Select
          className={styles.selector}
          defaultValue={selectedCategory}
          onChange={(option: Vehicle | null) =>
            setSelectedCategory(option?.value)
          }
          options={categories}
          placeholder="Категории"
        />
        <Select
          className={styles.selector}
          defaultValue={selectedBrand}
          onChange={(option: Vehicle | null) => setSelectedBrand(option?.value)}
          options={brands}
          placeholder="Бренды"
        />
      </div>
      <div className={styles.bottom}>
        <p>Всего: {total}</p>
        <div className={styles.minbox}>
          <p>Сортировка</p>
          <Select
            className={styles.selector}
            defaultValue={sortBy}
            onChange={(option: Vehicle | null) => setSortBy(option?.value)}
            options={sort}
            placeholder="Сортировать по"
          />
        </div>
      </div>
    </div>
  );
};

export default Filter;
