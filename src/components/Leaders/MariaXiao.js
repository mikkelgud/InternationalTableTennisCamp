import React from 'react';
import { StyledTextSectionHeader } from '../../styleguides/StyledSectionHeader';
import { StyledText } from '../../styleguides/StyledText';
import StyledTextBoxDiv from '../../styleguides/StyledTextBoxDiv';
import { StyledH3 } from '../../styleguides/Styledh3';
import Maria from '../../Assets/MariaXiao.jpeg';
import { ScrollTop } from '../../utils/ScrollToTopp';
import { StyledImageForLeaders } from '../../styleguides/StyledImageForLeaders';
import { InfoBox } from '../../styleguides/StyledInfoBox';


export default function MariaXiao() {
    ScrollTop();
    return (
        <StyledTextBoxDiv>
            <StyledTextSectionHeader>
                Maria Xiao
                 </StyledTextSectionHeader>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                <StyledImageForLeaders src={Maria} />
            </div>
            <InfoBox>
                <StyledH3>Accomplishments</StyledH3>
                <StyledText>
                    <ul>
                        <li>2008 Europe Top10 bronze medal singles.</li>
                        <li>2009  European Championships Bronze medal teams.</li>
                        <li>2012 World Junior Finals bronze medal singles . </li>
                        <li>Best World Junior Ranking : 9 .</li>
                        <li>Best European Junior Ranking : 4 .</li>
                        <li>2018 Mediterranean Games Champion teams.</li>
                        <li>2019 Spanish Cup , Spanish League and ETTU Cup champion.</li>
                        <li>Spanish National Champion 3 times singles.</li>
                    </ul>
                </StyledText>
            </InfoBox>
            <InfoBox>
                <StyledH3>Responsibilities</StyledH3>
                <StyledText>
                    <ul>
                        <li>Coach during ITTCamp Poland.</li>
                    </ul>
                </StyledText>
            </InfoBox>
        </StyledTextBoxDiv>
    );
}