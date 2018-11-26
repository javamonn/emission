/* tslint:disable */

import { ConcreteFragment } from "relay-runtime";
import { Artists_show$ref } from "./Artists_show.graphql";
import { Artworks_show$ref } from "./Artworks_show.graphql";
import { LocationMap_location$ref } from "./LocationMap_location.graphql";
import { ShowHeader_show$ref } from "./ShowHeader_show.graphql";
import { Shows_show$ref } from "./Shows_show.graphql";
declare const _Detail_show$ref: unique symbol;
export type Detail_show$ref = typeof _Detail_show$ref;
export type Detail_show = {
    readonly id: string;
    readonly name: string | null;
    readonly description: string | null;
    readonly city: string | null;
    readonly location: ({
        readonly id: string;
        readonly address: string | null;
        readonly address_2: string | null;
        readonly city: string | null;
        readonly state: string | null;
        readonly postal_code: string | null;
        readonly day_schedules: ReadonlyArray<({
            readonly start_time: number | null;
            readonly end_time: number | null;
            readonly day_of_week: string | null;
        }) | null> | null;
        readonly " $fragmentRefs": LocationMap_location$ref;
    }) | null;
    readonly images: ReadonlyArray<({
        readonly id: string | null;
    }) | null> | null;
    readonly status: string | null;
    readonly counts: ({
        readonly artworks: number | null;
        readonly eligible_artworks: any | null;
    }) | null;
    readonly partner: ({
        readonly name?: string | null;
        readonly type?: string | null;
    }) | null;
    readonly " $fragmentRefs": ShowHeader_show$ref & Artworks_show$ref & Artists_show$ref & Shows_show$ref;
    readonly " $refType": Detail_show$ref;
};



const node: ConcreteFragment = (function(){
var v0 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
},
v1 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "name",
  "args": null,
  "storageKey": null
},
v2 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "city",
  "args": null,
  "storageKey": null
},
v3 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "__id",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Fragment",
  "name": "Detail_show",
  "type": "Show",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    v0,
    v1,
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "description",
      "args": null,
      "storageKey": null
    },
    v2,
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "location",
      "storageKey": null,
      "args": null,
      "concreteType": "Location",
      "plural": false,
      "selections": [
        v0,
        {
          "kind": "ScalarField",
          "alias": null,
          "name": "address",
          "args": null,
          "storageKey": null
        },
        {
          "kind": "ScalarField",
          "alias": null,
          "name": "address_2",
          "args": null,
          "storageKey": null
        },
        v2,
        {
          "kind": "ScalarField",
          "alias": null,
          "name": "state",
          "args": null,
          "storageKey": null
        },
        {
          "kind": "ScalarField",
          "alias": null,
          "name": "postal_code",
          "args": null,
          "storageKey": null
        },
        {
          "kind": "LinkedField",
          "alias": null,
          "name": "day_schedules",
          "storageKey": null,
          "args": null,
          "concreteType": "DaySchedule",
          "plural": true,
          "selections": [
            {
              "kind": "ScalarField",
              "alias": null,
              "name": "start_time",
              "args": null,
              "storageKey": null
            },
            {
              "kind": "ScalarField",
              "alias": null,
              "name": "end_time",
              "args": null,
              "storageKey": null
            },
            {
              "kind": "ScalarField",
              "alias": null,
              "name": "day_of_week",
              "args": null,
              "storageKey": null
            }
          ]
        },
        v3,
        {
          "kind": "FragmentSpread",
          "name": "LocationMap_location",
          "args": null
        }
      ]
    },
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "images",
      "storageKey": null,
      "args": null,
      "concreteType": "Image",
      "plural": true,
      "selections": [
        v0
      ]
    },
    {
      "kind": "FragmentSpread",
      "name": "ShowHeader_show",
      "args": null
    },
    {
      "kind": "FragmentSpread",
      "name": "Artworks_show",
      "args": null
    },
    {
      "kind": "FragmentSpread",
      "name": "Artists_show",
      "args": null
    },
    {
      "kind": "FragmentSpread",
      "name": "Shows_show",
      "args": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "status",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "counts",
      "storageKey": null,
      "args": null,
      "concreteType": "ShowCounts",
      "plural": false,
      "selections": [
        {
          "kind": "ScalarField",
          "alias": null,
          "name": "artworks",
          "args": null,
          "storageKey": null
        },
        {
          "kind": "ScalarField",
          "alias": null,
          "name": "eligible_artworks",
          "args": null,
          "storageKey": null
        }
      ]
    },
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "partner",
      "storageKey": null,
      "args": null,
      "concreteType": null,
      "plural": false,
      "selections": [
        v3,
        {
          "kind": "InlineFragment",
          "type": "ExternalPartner",
          "selections": [
            v1
          ]
        },
        {
          "kind": "InlineFragment",
          "type": "Partner",
          "selections": [
            v1,
            {
              "kind": "ScalarField",
              "alias": null,
              "name": "type",
              "args": null,
              "storageKey": null
            }
          ]
        }
      ]
    },
    v3
  ]
};
})();
(node as any).hash = '8333b1d3f46c0d564ee96863115e131c';
export default node;
