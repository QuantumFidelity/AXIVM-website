import React, { useEffect, useState } from "react";
import styled from "styled-components";

const StyledSectionTitle = styled.div`
  width: 100%;
  padding: var(--margins-md);
  display: flex;
  font-family: Archivo, sans-serif;
  font-size: 15px;
  font-weight: 600;
  cursor: pointer;
  border-bottom: 1px solid var(--color-border-accordion);
`;

const StyledLi = styled.li<{ isExpanded: boolean }>`
  width: 100%;
  display: flex;
  flex-direction: column;
  font-family: Roboto, sans-serif;
  border-bottom: ${(props) => (props.isExpanded ? "1px" : "0px")} solid
    var(--color-border-accordion);
`;

const IconBox = styled.div`
  display: flex;
  align-items: center;
  gap: var(--margins-lg);
`;

const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
`;

// Icon components
const IconBase: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    width="20"
    height="20"
    style={{
      color: 'var(--color-text)',
      flexShrink: 0
    }}
    {...props}
  />
);

const SvgPlusIconBold: React.FC = () => (
  <IconBase viewBox="0 0 24 24" stroke="currentColor" fill="none">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={3}
      d="M12 6v6m0 0v6m0-6h6m-6 0H6"
    />
  </IconBase>
);

const SvgMinusLongBoldIcon: React.FC = () => (
  <IconBase viewBox="0 0 20 20" stroke="currentColor" fill="none">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={3}
      d="M14 12H4"
    />
  </IconBase>
);

interface AccordionSectionProps {
  onClick: (index: number) => void;
  expandedIndex: number;
  index: number;
  title: React.ReactNode;
  children: React.ReactNode;
}

export const AccordionSection: React.FC<AccordionSectionProps> = ({
  onClick,
  expandedIndex,
  index,
  title,
  children
}) => {
  const isExpanded = expandedIndex === index || expandedIndex === -1;
  return (
    <StyledLi isExpanded={isExpanded}>
      <StyledSectionTitle onClick={() => (isExpanded ? onClick(-2) : onClick(index))}>
        <TitleWrapper>
          {isExpanded ? <SvgMinusLongBoldIcon /> : <SvgPlusIconBold />}
          <span>{title}</span>
        </TitleWrapper>
      </StyledSectionTitle>
      <AccordionSectionContent isExpanded={isExpanded}>
        {children}
      </AccordionSectionContent>
    </StyledLi>
  );
};

const StyledContent = styled.div<{ isExpanded: boolean }>`
  padding-top: ${(props) => (props.isExpanded ? "var(--margins-xl)" : 0)};
  padding-bottom: ${(props) => (props.isExpanded ? "var(--margins-xl)" : 0)};
  padding-left: var(--margins-xl);
  padding-right: 400px;
  @media (max-width: 1024px) {
    padding-right: var(--margins-xl);
  }
  transform: ${(props) =>
    props.isExpanded ? "translate(0)" : "translate(-1)"};
  height: ${(props) => (props.isExpanded ? "auto" : "0")};
  transform-origin: top;
  transition: all 0.3s ease;
  text-align: justify;
  overflow: hidden;
`;

export const AccordionSectionContent: React.FC<{
  children: React.ReactNode;
  isExpanded: boolean;
}> = ({ children, isExpanded }) => (
  <StyledContent isExpanded={isExpanded}>
    {children}
  </StyledContent>
);

const StyledAccordion = styled.ul`
  width: 100%;
  padding: 0;
  margin-top: var(--margins-md);
  margin-bottom: var(--margins-md);
  border-left: 1px solid var(--color-border-accordion);
  border-right: 1px solid var(--color-border-accordion);
  li:first-child {
    border-top: 1px solid var(--color-border-accordion);
  }
  list-style-type: none;
`;

export const Accordion: React.FC<{ children: React.ReactNode[] }> = ({ children }) => {
  const [expandedIndex, setExpandedIndex] = useState<number>(-1);
  let index = -1;
  
  useEffect(() => {
    setExpandedIndex(0);
  }, []);

  const childrenWithExpandedIndex = React.Children.map(children, (child) => {
    index = index + 1;
    if (React.isValidElement(child)) {
      return React.cloneElement(child, {
        expandedIndex,
        index,
        onClick: setExpandedIndex,
      });
    }
    return child;
  });

  return <StyledAccordion>{childrenWithExpandedIndex}</StyledAccordion>;
};
