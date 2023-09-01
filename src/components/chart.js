import React, { useRef, useEffect } from 'react';
import * as d3 from 'd3';

const VennDiagramComponent = ({ data }) => {
  const chartRef = useRef(null);

  useEffect(() => {
    if (!chartRef.current) return;

    const svg = d3.select(chartRef.current);

    const width = 400;
    const height = 400;

    const circleRadius = 100;

    const vennData = [
      { name: 'Circle 1', percentage: data[0].percentage },
      { name: 'Circle 2', percentage: data[1].percentage },
    ];

    const simulation = d3.forceSimulation(vennData)
      .force('center', d3.forceCenter(width / 2, height / 2))
      .force('collision', d3.forceCollide().radius(d => circleRadius * (d.percentage / 100)));

    const circles = svg.selectAll('circle')
      .data(vennData)
      .enter()
      .append('circle')
      .attr('r', d => circleRadius * (d.percentage / 100))
      .attr('cx', width / 2)
      .attr('cy', height / 2)
      .attr('fill', (d, i) => d3.schemeCategory10[i]);

    simulation.on('tick', () => {
      circles.attr('cx', d => d.x).attr('cy', d => d.y);
    });
  }, [data]);

  return (
    <svg ref={chartRef} width={400} height={400}></svg>
  );
};

export default VennDiagramComponent;
