import React, { useEffect } from "react";
import shallow from "zustand/shallow";
import styled from "styled-components";

import { FlexContainer } from "../../../../../styled/Container";
import { Space } from "../../../../../styled/Space";
import { Typography } from "../../../../../styled/Typography";

import { useStores } from "../../../../../stores/useStores";

const SummaryItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 20px;
  border-radius: ${props => props.theme.borderRadius};
  background: ${props => props.theme.palette.light};
`;

export default function SummaryItems() {
  const { activities, getUserStats, userBalance, totalExpenses, totalExpensesAmount } = useStores((state) => ({
    getUserStats: state.getUserStats,
    userBalance: state.userBalance,
    totalExpenses: state.totalExpenses,
    totalExpensesAmount: state.totalExpensesAmount,
    activities: state.activities
  }), shallow);

  useEffect(function () {
    (async function () {
      await getUserStats();
    })();
  }, []);

  function renderUI() {
    return (
      <FlexContainer flex alignItems="center">
        <SummaryItem>
          <Typography size="1.5" weight="600">
            ${userBalance ? userBalance : 0}
          </Typography>
          <Space mt="2" />
          <Typography weight="400">
            Balance actual
          </Typography>
        </SummaryItem>
        <Space ml="15" />
        <SummaryItem>
          <Typography size="1.5" weight="600">
            {totalExpenses}
          </Typography>
          <Space mt="2" />
          <Typography weight="400">
            Cantidad de gastos
          </Typography>
        </SummaryItem>
        <Space ml="15" />
        <SummaryItem>
          <Typography size="1.5" weight="600">
            ${totalExpensesAmount}
          </Typography>
          <Space mt="2" />
          <Typography weight="400">
            Total de gastos
          </Typography>
        </SummaryItem>
      </FlexContainer>
    );
  }

  return renderUI();
}