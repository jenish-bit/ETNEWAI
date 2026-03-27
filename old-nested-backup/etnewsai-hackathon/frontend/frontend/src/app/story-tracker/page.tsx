'use client';

import { useState } from 'react';
import { TimelineIcon, TrendingUpIcon } from '@heroicons/react/24/outline';

export default function StoryTrackerPage() {
  const [selectedStory, setSelectedStory] = useState('merger');

  const stories = [
    { id: 'merger', name: 'Tata-Air India Merger' },
    { id: 'crypto', name: 'Crypto Regulation' },
    { id: 'ev', name: 'EV Market Growth' },
  ];

  const timeline = [
    { date: 'Jan 2026', event: 'Initial announcement', sentiment: 'positive' },
    { date: 'Feb 2026', event: 'Regulatory approval pending', sentiment: 'neutral' },
    { date: 'Mar 2026', event: 'Market reaction mixed', sentiment: 'negative' },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-fg mb-2">Story Arc Tracker</h1>
        <p className="text-fg-muted">Visual narrative of ongoing business stories</p>
      </div>

      <div className="mb-8">
        <select
          value={selectedStory}
          onChange={(e) => setSelectedStory(e.target.value)}
          className="px-4 py-3 bg-surface border border-border rounded-lg text-fg focus:outline-none focus:border-primary"
        >
          {stories.map((story) => (
            <option key={story.id} value={story.id}>
              {story.name}
            </option>
          ))}
        </select>
      </div>

      <div className="bg-surface border border-border rounded-xl p-6 mb-8">
        <h2 className="text-xl font-semibold text-fg mb-6 flex items-center">
          <TimelineIcon className="h-6 w-6 text-primary mr-2" />
          Timeline
        </h2>
        
        <div className="space-y-6">
          {timeline.map((item, index) => (
            <div key={index} className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-24 text-sm text-fg-dim">{item.date}</div>
              <div className="flex-1">
                <div className="flex items-center space-x-3">
                  <div className={\w-3 h-3 rounded-full \\} />
                  <p className="text-fg">{item.event}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-surface border border-border rounded-xl p-6">
          <h3 className="text-lg font-semibold text-fg mb-4">Key Players</h3>
          <ul className="space-y-2">
            <li className="text-fg-muted">• Tata Group</li>
            <li className="text-fg-muted">• Air India Management</li>
            <li className="text-fg-muted">• DGCA Regulators</li>
          </ul>
        </div>

        <div className="bg-surface border border-border rounded-xl p-6">
          <h3 className="text-lg font-semibold text-fg mb-4 flex items-center">
            <TrendingUpIcon className="h-5 w-5 text-primary mr-2" />
            Sentiment Analysis
          </h3>
          <div className="space-y-3">
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span className="text-fg-muted">Positive</span>
                <span className="text-fg">35%</span>
              </div>
              <div className="h-2 bg-bg-3 rounded-full">
                <div className="h-2 bg-green-500 rounded-full" style={{ width: '35%' }} />
              </div>
            </div>
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span className="text-fg-muted">Neutral</span>
                <span className="text-fg">45%</span>
              </div>
              <div className="h-2 bg-bg-3 rounded-full">
                <div className="h-2 bg-yellow-500 rounded-full" style={{ width: '45%' }} />
              </div>
            </div>
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span className="text-fg-muted">Negative</span>
                <span className="text-fg">20%</span>
              </div>
              <div className="h-2 bg-bg-3 rounded-full">
                <div className="h-2 bg-red-500 rounded-full" style={{ width: '20%' }} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
