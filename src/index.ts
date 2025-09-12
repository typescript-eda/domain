/**
 * @typescript-eda/domain - Core Domain Primitives
 * 
 * This package provides the fundamental building blocks for domain-driven design
 * in event-driven architectures.
 */

// Core domain abstractions
export { Entity } from './domain/entity';
export { Event } from './domain/event';
export { ValueObject } from './domain/value-object';
export { Repository } from './domain/repository';
export { Port } from './domain/port';
export { Ports } from './domain/ports';

// Decorators for domain behavior
export { listen } from './domain/listen.decorator';

// Re-export all from domain/index.ts to avoid duplicate exports
export * from './domain/index';

// Version information
export const VERSION = '1.0.0';