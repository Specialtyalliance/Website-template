import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, Clock, Search } from 'lucide-react';
import HeroSection from '../components/HeroSection';
import SectionHeading from '../components/SectionHeading';
import BookCTA from '../components/BookCTA';
import { blogData } from '../data/blogPosts';

const categories = ['All', 'Cosmetic Dentistry', 'Technology', 'Preventive Care', 'Dental Implants', 'Invisalign', 'Emergency Care', 'Oral Hygiene', 'New Patients', 'Insurance'];

const BlogPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filtered = blogData.filter((post) => {
    const matchesCategory = activeCategory === 'All' || post.category === activeCategory;
    const matchesSearch = searchQuery === '' ||
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featured = filtered[0];
  const rest = filtered.slice(1);

  return (
    <>
      <HeroSection
        title="Dental Health Blog"
        subtitle="Expert insights, tips, and news to help you maintain a healthy, beautiful smile"
        backgroundImage="https://images.pexels.com/photos/4269692/pexels-photo-4269692.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        compact
      />

      {/* Search and filter */}
      <section className="py-10 bg-white border-b border-surface-100">
        <div className="container-wide">
          {/* Search bar */}
          <div className="relative max-w-md mx-auto mb-8">
            <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-text-muted" />
            <input
              type="text"
              placeholder="Search articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-11 pr-4 py-3 rounded-xl border border-surface-200 bg-surface-50 text-sm text-text-main placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-primary-teal/20 focus:border-primary-teal transition-all"
            />
          </div>

          {/* Category pills */}
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeCategory === cat
                    ? 'bg-primary-teal text-white shadow-sm'
                    : 'bg-surface-50 text-text-muted border border-surface-200 hover:bg-primary-teal-50 hover:text-primary-teal hover:border-primary-teal-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured + grid */}
      <section className="section-padding bg-white">
        <div className="container-wide">
          {filtered.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-text-muted text-lg">No articles found matching your criteria.</p>
              <button
                onClick={() => { setActiveCategory('All'); setSearchQuery(''); }}
                className="mt-4 text-primary-teal font-semibold hover:underline"
              >
                Clear filters
              </button>
            </div>
          ) : (
            <>
              {/* Featured post */}
              {featured && (
                <Link to={`/blog/${featured.slug}`} className="group block mb-14">
                  <div className="card-premium overflow-hidden grid grid-cols-1 lg:grid-cols-2">
                    <div className="relative h-64 lg:h-auto overflow-hidden">
                      <img
                        src={featured.image}
                        alt={featured.title}
                        className="w-full h-full object-cover transition-transform duration-600 ease-premium group-hover:scale-105"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="inline-block px-3 py-1 rounded-full bg-primary-teal text-white text-xs font-semibold uppercase tracking-wide">
                          Featured
                        </span>
                      </div>
                    </div>
                    <div className="p-8 lg:p-10 flex flex-col justify-center">
                      <span className="text-xs font-semibold uppercase tracking-wide text-primary-teal mb-3">{featured.category}</span>
                      <h2 className="font-display text-heading-lg lg:text-display-sm text-text-main mb-4 group-hover:text-primary-teal transition-colors duration-300">
                        {featured.title}
                      </h2>
                      <p className="text-body text-text-light leading-relaxed mb-6">
                        {featured.excerpt}
                      </p>
                      <div className="flex items-center gap-5 text-text-muted text-sm mb-6">
                        <div className="flex items-center gap-1.5">
                          <Calendar size={14} />
                          <span>{featured.date}</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <Clock size={14} />
                          <span>{featured.readTime}</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 text-accent-aqua font-semibold text-sm">
                        Read Full Article
                        <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
                      </div>
                    </div>
                  </div>
                </Link>
              )}

              {/* Article grid */}
              {rest.length > 0 && (
                <>
                  <SectionHeading
                    overline="Latest Posts"
                    title="More Articles"
                    centered
                  />
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
                    {rest.map((post) => (
                      <Link key={post.id} to={`/blog/${post.slug}`} className="group block">
                        <div className="card-premium overflow-hidden h-full flex flex-col">
                          <div className="relative h-52 overflow-hidden">
                            <img
                              src={post.image}
                              alt={post.title}
                              className="w-full h-full object-cover transition-transform duration-600 ease-premium group-hover:scale-105"
                            />
                          </div>
                          <div className="p-7 flex flex-col flex-grow">
                            <span className="text-xs font-semibold uppercase tracking-wide text-primary-teal mb-2">{post.category}</span>
                            <h3 className="text-heading-sm text-text-main mb-3 group-hover:text-primary-teal transition-colors duration-300 line-clamp-2">
                              {post.title}
                            </h3>
                            <p className="text-body-sm text-text-light leading-relaxed flex-grow mb-4 line-clamp-3">
                              {post.excerpt}
                            </p>
                            <div className="flex items-center justify-between mt-auto pt-4 border-t border-surface-100">
                              <div className="flex items-center gap-3 text-text-muted text-caption">
                                <div className="flex items-center gap-1">
                                  <Calendar size={12} />
                                  <span>{post.date}</span>
                                </div>
                                <div className="flex items-center gap-1">
                                  <Clock size={12} />
                                  <span>{post.readTime}</span>
                                </div>
                              </div>
                              <ArrowRight size={16} className="text-accent-aqua transition-transform duration-300 group-hover:translate-x-1" />
                            </div>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </>
              )}
            </>
          )}
        </div>
      </section>

      {/* Newsletter-style CTA */}
      <section className="py-16 bg-surface-50">
        <div className="container-tight text-center">
          <h2 className="font-display text-heading-lg text-text-main mb-3">Stay Informed About Your Dental Health</h2>
          <p className="text-text-muted text-body mb-8 max-w-xl mx-auto">
            Visit our blog regularly for new articles on oral health, the latest dental treatments, and practical tips to keep your smile at its best.
          </p>
          <Link
            to="/contact"
            className="btn-primary inline-flex"
          >
            Contact Us for Questions
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container-wide text-center">
          <BookCTA />
        </div>
      </section>
    </>
  );
};

export default BlogPage;
