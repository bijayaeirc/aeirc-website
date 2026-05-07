import api from "../api/client";
import { services as fallbackServices } from "../data/servicesData";
import type { Service } from "../data/servicesData";

let cache: Service[] | null = null;
let pending: Promise<Service[]> | null = null;

export function getServicesCache(): Service[] | null {
  return cache;
}

export function fetchServices(): Promise<Service[]> {
  if (cache) return Promise.resolve(cache);
  if (pending) return pending; // deduplicate concurrent calls

  pending = api
    .get<Service[]>("/services")
    .then((res) => {
      if (Array.isArray(res.data) && res.data.length > 0) {
        cache = res.data;
        return cache;
      }
      return fallbackServices;
    })
    .catch(() => fallbackServices)
    .finally(() => {
      pending = null;
    });

  return pending;
}
