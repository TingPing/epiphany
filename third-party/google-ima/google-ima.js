/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 *
 * Stub for the Google Interactive Media Ads SDK (ima3.js).
 * Based on uBlock Origin's google-ima.js resource:
 *   https://github.com/gorhill/uBlock/blob/master/src/web_accessible_resources/google-ima.js
 * which is (c) Raymond Hill and uBO contributors, MPL-2.0.
 *
 * This stub replaces the real IMA SDK loader so that YouTube loads
 * without displaying ads while preserving normal video playback.
 */

/* jshint esversion: 8 */

(function () {
  'use strict';

  const ima = {
    VERSION: '3.453.0',

    AdCuePoints: {},

    AdDisplayContainer: class {
      constructor () {}
      destroy () {}
      initialize () {}
    },

    AdError: class {
      getErrorCode () { return 0; }
      getInnerError () { return null; }
      getMessage () { return ''; }
      getType () { return ''; }
      getVastErrorCode () { return 0; }
      toString () { return ''; }
    },

    AdErrorEvent: class {
      getError () { return null; }
      getUserRequestContext () { return {}; }
    },

    AdEvent: class {
      getAd () { return null; }
      getAdData () { return {}; }
    },

    AdsLoader: class {
      constructor () { this._listeners = Object.create (null); }
      addEventListener (type, listener) {
        if (!this._listeners[type])
          this._listeners[type] = [];
        this._listeners[type].push (listener);
      }
      removeEventListener () {}
      contentComplete () {}
      destroy () {}
      getSettings () { return new ima.ImaSdkSettings (); }
      getVersion () { return ima.VERSION; }
      requestAds () {
        const type = ima.AdErrorEvent.Type.AD_ERROR;
        const listeners = this._listeners[type] || [];
        const event = {
          type,
          getError: () => null,
          getUserRequestContext: () => ({}),
        };
        setTimeout (() => {
          listeners.forEach (l => { try { l (event); } catch (e) {} });
        }, 0);
      }
    },

    AdsManager: {},

    AdsManagerLoadedEvent: class {
      constructor () {}
      getAdsManager () { return null; }
      getUserRequestContext () { return {}; }
    },

    AdsRenderingSettings: class { constructor () {} },

    AdsRequest: class {
      constructor () {}
      setAdWillAutoPlay () {}
      setAdWillPlayMuted () {}
    },

    CompanionAdSelectionSettings: class { constructor () {} },

    ImaSdkSettings: class {
      getCompanionBackfill () { return ima.ImaSdkSettings.CompanionBackfillMode.ALWAYS; }
      getDisableCustomPlaybackForIOS10Plus () { return false; }
      getFeatureFlags () { return {}; }
      getLocale () { return 'en'; }
      getNumRedirects () { return 4; }
      getPlayerType () { return 'Unknown'; }
      getPlayerVersion () { return '1.0.0'; }
      getPpid () { return ''; }
      getSessionId () { return ''; }
      isCookiesEnabled () { return true; }
      isVpaidAllowed () { return true; }
      isVpaidEnabled () { return true; }
      setAutoPlayAdBreaks () {}
      setCookiesEnabled () {}
      setDisableCustomPlaybackForIOS10Plus () {}
      setFeatureFlags () {}
      setLocale () {}
      setNumRedirects () {}
      setPlayerType () {}
      setPlayerVersion () {}
      setPpid () {}
      setSessionId () {}
      setVpaidAllowed () {}
      setVpaidMode () {}
    },

    UiElements: { COUNTDOWN: 'countdown' },

    ViewMode: { FULLSCREEN: 'fullscreen', NORMAL: 'normal' },
  };

  ima.AdErrorEvent.Type = { AD_ERROR: 'adError' };

  ima.AdEvent.Type = {
    ALL_ADS_COMPLETED: 'allAdsCompleted',
    CLICK: 'click',
    COMPLETE: 'complete',
    CONTENT_PAUSE_REQUESTED: 'contentPauseRequested',
    CONTENT_RESUME_REQUESTED: 'contentResumeRequested',
    DURATION_CHANGE: 'durationChange',
    FIRST_QUARTILE: 'firstQuartile',
    IMPRESSION: 'impression',
    INTERACTION: 'interaction',
    LINEAR_CHANGED: 'linearChanged',
    LOADED: 'loaded',
    LOG: 'log',
    MIDPOINT: 'midpoint',
    PAUSED: 'pause',
    RESUMED: 'resume',
    SKIPPABLE_STATE_CHANGED: 'skippableStateChanged',
    SKIPPED: 'skip',
    STARTED: 'start',
    THIRD_QUARTILE: 'thirdQuartile',
    USER_CLOSE: 'userClose',
    VIDEO_CLICKED: 'videoClicked',
    VIDEO_ICON_CLICKED: 'videoIconClicked',
    VIEWABLE_IMPRESSION: 'viewableImpression',
    VOLUME_CHANGED: 'volumeChange',
    VOLUME_MUTED: 'mute',
  };

  ima.AdsManagerLoadedEvent.Type = { ADS_MANAGER_LOADED: 'adsManagerLoaded' };

  ima.ImaSdkSettings.CompanionBackfillMode = {
    ALWAYS: 'always',
    ON_MASTER_AD: 'on_master_ad',
  };

  ima.ImaSdkSettings.VpaidMode = { DISABLED: 0, ENABLED: 1, INSECURE: 2 };

  if (typeof window.google === 'undefined')
    window.google = {};
  window.google.ima = ima;

  /* DAI (Dynamic Ad Insertion) stub */
  if (typeof window.google.ima.dai === 'undefined') {
    const dai = { api: {} };

    dai.api.Ad = class { constructor () {} };
    dai.api.AdPodInfo = class { constructor () {} };
    dai.api.AdProgressData = class { constructor () {} };
    dai.api.CompanionAd = class { constructor () {} };
    dai.api.CuePoint = class { constructor () {} };
    dai.api.LiveStreamRequest = class { constructor () {} };
    dai.api.StreamData = class { constructor () {} };
    dai.api.StreamEvent = class {
      constructor () {}
      getAd () { return null; }
      getStreamData () { return null; }
    };
    dai.api.StreamManager = class {
      constructor () { this._listeners = Object.create (null); }
      addEventListener (t, l) {
        if (!this._listeners[t])
          this._listeners[t] = [];
        this._listeners[t].push (l);
      }
      contentTimeForStreamTime (t) { return t; }
      onTokenReady () {}
      previousCuePointForStreamTime () { return null; }
      processMetadata () {}
      removeEventListener () {}
      replaceAdTagParameters () {}
      requestStream () {}
      reset () {}
      streamTimeForContentTime (t) { return t; }
    };
    dai.api.StreamRequest = class { constructor () {} };
    dai.api.VODStreamRequest = class { constructor () {} };

    dai.api.StreamEvent.Type = {
      AD_BREAK_ENDED: 'adBreakEnded',
      AD_BREAK_STARTED: 'adBreakStarted',
      AD_PROGRESS: 'adProgress',
      CUEPOINTS_CHANGED: 'cuepointsChanged',
      ERROR: 'error',
      LOADED: 'loaded',
      STARTED: 'started',
      STREAM_INITIALIZED: 'streamInitialized',
    };

    window.google.ima.dai = dai;
  }
}) ();
