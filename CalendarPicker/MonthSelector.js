// Parent view for Month selector

import React, { Component } from 'react';
import { View } from 'react-native';
import MonthsGridView from './MonthsGridView';
import MonthsHeader from './MonthsHeader';

export default class MonthSelector extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentYear: props.currentYear,
    };
  }

  render() {
    const {
      styles,
      textStyle,
      title,
      headingLevel,
      currentYear,
      months,
      minDate,
      maxDate,
      onSelectMonth,
      titleVisible,
      selectedMonth,
      selectedMonthStyle,
    } = this.props;

    return (
        <View styles={styles.calendar}>
          {titleVisible && (<MonthsHeader
              styles={styles}
              textStyle={textStyle}
              title={title + currentYear}
              headingLevel={headingLevel}
          />)}
          <MonthsGridView
              styles={styles}
              textStyle={textStyle}
              currentYear={currentYear}
              months={months}
              minDate={minDate}
              maxDate={maxDate}
              onSelectMonth={onSelectMonth}
              selectedMonth={selectedMonth}
              selectedMonthStyle={selectedMonthStyle}
          />
        </View>
    );
  }
}
