import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock, User, ArrowRight, Tag } from 'lucide-react';
import { blogData } from '../data/blogPosts';
import { blogContent } from '../data/blogContent';
import BookCTA from '../components/BookCTA';

const BlogPostPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = blogData.find((p) => p.slug === slug);

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-20">
        <div className="text-center">
          <h1 className="font-display text-display-md text-text-main mb-4">Post Not Found</h1>
          <p className="text-text-muted mb-8">The article you are looking for does not exist or has been moved.</p>
          <Link to="/blog" className="btn-primary">Back to Blog</Link>
        </div>
      </div>
    );
  }

  const sections = blogContent[post.slug] || [];
  const otherPosts = blogData.filter((p) => p.slug !== slug).slice(0, 3);

  return (
    <div className="pt-24 pb-20 bg-white">
      <article className="container-tight">
        {/* Back link */}
        <Link
          to="/blog"
          className="inline-flex items-center gap-2 text-text-muted hover:text-primary-teal transition-colors mb-8 text-sm font-medium"
        >
          <ArrowLeft size={16} />
          Back to Blog
        </Link>

        {/* Category badge */}
        <div className="mb-4">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary-teal-50 text-primary-teal text-xs font-semibold uppercase tracking-wide">
            <Tag size={12} />
            {post.category}
          </span>
        </div>

        {/* Title */}
        <h1 className="font-display text-display-sm md:text-display-md text-text-main mb-6 leading-tight">
          {post.title}
        </h1>

        {/* Meta */}
        <div className="flex flex-wrap items-center gap-5 text-text-muted text-sm mb-8 pb-8 border-b border-surface-200">
          <div className="flex items-center gap-2">
            <Calendar size={15} />
            <span>{post.date}</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock size={15} />
            <span>{post.readTime}</span>
          </div>
          <div className="flex items-center gap-2">
            <User size={15} />
            <span>Dr. Hamza Tariq</span>
          </div>
        </div>

        {/* Hero image */}
        <div className="rounded-2xl overflow-hidden shadow-elevated mb-12">
          <img src={post.image} alt={post.title} className="w-full h-[320px] sm:h-[420px] object-cover" />
        </div>

        {/* Article content */}
        <div className="max-w-none">
          {sections.map((section, sIdx) => (
            <div key={sIdx} className={sIdx > 0 ? 'mt-10' : ''}>
              {section.heading && (
                <h2 className="font-display text-heading-lg text-text-main mb-4">
                  {section.heading}
                </h2>
              )}
              {section.paragraphs.map((paragraph, pIdx) => (
                <p key={pIdx} className="text-text-light text-body leading-[1.85] mb-5">
                  {paragraph}
                </p>
              ))}
            </div>
          ))}
        </div>

        {/* Author card */}
        <div className="mt-14 p-8 bg-surface-50 rounded-2xl border border-surface-100 flex flex-col sm:flex-row items-center gap-6">
          <img
            src="https://images.pexels.com/photos/5214958/pexels-photo-5214958.jpeg?auto=compress&cs=tinysrgb&w=200"
            alt="Dr. Hamza Tariq"
            className="w-20 h-20 rounded-full object-cover ring-4 ring-white shadow-card flex-shrink-0"
          />
          <div>
            <p className="font-semibold text-text-main text-lg">Dr. Hamza Tariq</p>
            <p className="text-text-muted text-sm mb-2">Lead Dentist & Practice Owner</p>
            <p className="text-text-light text-body-sm leading-relaxed">
              Dr. Tariq is a graduate of NYU College of Dentistry with advanced training in cosmetic dentistry, implantology, and full-mouth rehabilitation.
            </p>
          </div>
        </div>
      </article>

      {/* Related posts */}
      {otherPosts.length > 0 && (
        <section className="mt-20 section-padding bg-surface-50">
          <div className="container-wide">
            <h2 className="font-display text-heading-lg text-text-main mb-2 text-center">More Articles</h2>
            <p className="text-text-muted text-center mb-10">Continue reading from our dental health blog</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {otherPosts.map((p) => (
                <Link key={p.id} to={`/blog/${p.slug}`} className="group block">
                  <div className="card-premium overflow-hidden flex flex-col h-full">
                    <div className="h-48 overflow-hidden">
                      <img
                        src={p.image}
                        alt={p.title}
                        className="w-full h-full object-cover transition-transform duration-600 group-hover:scale-105"
                      />
                    </div>
                    <div className="p-6 flex flex-col flex-grow">
                      <span className="text-xs font-semibold uppercase tracking-wide text-primary-teal mb-2">{p.category}</span>
                      <h3 className="text-heading-sm text-text-main mb-3 group-hover:text-primary-teal transition-colors line-clamp-2">
                        {p.title}
                      </h3>
                      <p className="text-caption text-text-muted mb-4">{p.date} &middot; {p.readTime}</p>
                      <div className="flex items-center gap-2 text-accent-aqua font-semibold text-sm mt-auto">
                        Read Article
                        <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="section-padding bg-primary-teal-900 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent-aqua/5 rounded-full blur-3xl" />
        <div className="container-wide relative z-10 text-center">
          <p className="text-overline uppercase tracking-widest text-accent-aqua mb-4">Ready to Get Started?</p>
          <h2 className="font-display text-display-sm md:text-display-md text-white max-w-3xl mx-auto mb-6">
            Schedule Your Visit Today
          </h2>
          <p className="text-white/70 text-body-lg max-w-2xl mx-auto mb-10">
            Take the first step toward a healthier, more confident smile. We are accepting new patients and ready to help.
          </p>
          <BookCTA specialContrast />
        </div>
      </section>
    </div>
  );
};

export default BlogPostPage;
